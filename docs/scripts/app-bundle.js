define("app",["exports"],function(t){"use strict";function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.App=function(){function t(){n(this,t),this.id=1,this.lists=[],this.title="Shopping List",this.loadLists()}return t.prototype.loadLists=function(){var t=JSON.parse(localStorage.getItem("lists"));t&&(this.lists=t),this.id=localStorage.getItem("listId")},t.prototype.addList=function(){this.lists.push(this.id++),this.saveLists()},t.prototype.removeList=function(){this.lists.length>1?(this.lists=this.lists.slice(0,this.lists.length-1),this.id--):(this.lists=[],this.id=1),this.saveLists()},t.prototype.saveLists=function(){localStorage.setItem("lists",JSON.stringify(this.lists)),localStorage.setItem("listId",this.id)},t}()}),define("environment",["exports"],function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("item",["exports"],function(t){"use strict";function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.Item=function t(e){n(this,t),this.name="",this.purchased=!1,this.name=e}}),define("main",["exports","./environment"],function(t,n){"use strict";function e(t){t.use.standardConfiguration().feature("resources"),i.default.debug&&t.use.developmentLogging(),i.default.testing&&t.use.plugin("aurelia-testing"),t.start().then(function(){return t.setRoot()})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=e;var i=function(t){return t&&t.__esModule?t:{default:t}}(n)}),define("shopping-list",["exports","aurelia-framework","./item"],function(t,n,e){"use strict";function i(t,n,e,i){e&&Object.defineProperty(t,n,{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(i):void 0})}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ShoppingList=void 0;var o,r,a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();t.ShoppingList=(o=function(){function t(){s(this,t),i(this,"listId",r,this),this.listName="Shopping List",this.name="",this.items=[],this.isEditing=!1}return t.prototype.attached=function(){this.loadProperties(),this.loadItems()},t.prototype.loadProperties=function(){var t=JSON.parse(localStorage.getItem("properties#"+this.listId));t&&(this.listName=t.name)},t.prototype.loadItems=function(){var t=JSON.parse(localStorage.getItem("items#"+this.listId));t&&(this.items=t)},t.prototype.addItem=function(t){this.name&&(this.items.push(new e.Item(t)),this.name="",this.saveItems())},t.prototype.clearPurchased=function(){this.items=this.items.filter(function(t){return!t.purchased}),this.saveItems()},t.prototype.clearAll=function(){this.items=[],this.saveItems()},t.prototype.removeItem=function(t){this.items=this.items.filter(function(n){return n.name!==t.name}),this.saveItems()},t.prototype.saveItems=function(){localStorage.setItem("items#"+this.listId,JSON.stringify(this.items))},t.prototype.saveProperties=function(){localStorage.setItem("properties#"+this.listId,JSON.stringify({name:this.listName}))},t.prototype.toggleEditing=function(){this.isEditing=!this.isEditing},a(t,[{key:"isPurchased",get:function(){return this.items.find(function(t){return t.purchased})}}]),t}(),r=function(t,n,e,i,s){var o={};return Object.keys(i).forEach(function(t){o[t]=i[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=e.slice().reverse().reduce(function(e,i){return i(t,n,e)||e},o),s&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(s):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,n,o),o=null),o}(o.prototype,"listId",[n.bindable],{enumerable:!0,initializer:null}),o)}),define("resources/index",["exports"],function(t){"use strict";function n(t){}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=n}),define("resources/binding-behaviors/focus",["exports","aurelia-templating"],function(t,n){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Focus=void 0;t.Focus=function(){function t(n){e(this,t),this.element=n}return t.metadata=function(){return n.Behavior.attachedBehavior("focus").withProperty("value","valueChanged","focus")},t.inject=function(){return[Element]},t.prototype.valueChanged=function(t){t&&this.element.focus()},t}()}),define("text!app.html",["module"],function(t){t.exports='<template>\n  <require from="style.css"></require>\n  <require from="shopping-list"></require>\n  <require from="bottom-nav.html"></require>\n\n  <div class="main container-fluid">\n    <div class="page-header">\n      <h1>${title}</h1>\n    </div>\n    <div repeat.for="listId of lists">\n      <shopping-list list-id.bind="listId"></shopping-list>\n    </div>\n    <div>\n      <button type="button" class="btn btn-sm btn-primary" click.trigger="addList()">\n        <span class="glyphicon glyphicon-plus"></span>\n        New List\n      </button>\n      <button type="button" class="btn btn-sm btn-danger" click.trigger="removeList()">\n        <span class="glyphicon glyphicon-remove"></span>\n        Remove List\n      </button>\n    </div>\n  </div>\n  <bottom-nav></bottom-nav>\n</template>\n'}),define("text!style.css",["module"],function(t){t.exports='/** Page styles. */\n.main {\n  margin-bottom: 10px; }\n\n.github-banner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 149px;\n  width: 149px;\n  background: url(images/forkme.png);\n  text-indent: -9000px; }\n\n.navbar {\n  margin-bottom: 0;\n  border-radius: 0; }\n  .navbar p {\n    margin: 20px 0; }\n    .navbar p .rounded-corners {\n      border-radius: 3px; }\n\n/** Component styles. */\n.shopping-list label {\n  font-weight: normal; }\n\n.shopping-list input[type="checkbox"] {\n  margin-right: 5px; }\n\n.shopping-list .btn-delete {\n  margin-right: 5px;\n  line-height: 12px; }\n\n.shopping-list .purchased {\n  text-decoration: line-through; }\n\n.shopping-list .form-group {\n  margin: 0 0 3px;\n  padding: 0; }\n\n.shopping-list .form-control {\n  background: none;\n  border: 0;\n  margin: 0 5px 0;\n  padding: 0; }\n\n.shopping-list .form-item {\n  line-height: 16px;\n  height: 16px;\n  display: inline;\n  width: inherit; }\n\n.shopping-list .form-label {\n  font-weight: bold; }\n'}),define("text!bottom-nav.html",["module"],function(t){t.exports='<template>\n  <a class="github-banner" href="https://github.com/InSourceSoftware/in-shopping-list"></a>\n  <nav class="navbar navbar-default">\n    <div class="container-fluid">\n      <p class="text-center text-muted">\n        Copyright &copy; 2017 <a href="http://insource.io" title="InSource Software">InSource</a>\n        &middot;\n        Created by <a href="http://insource.io" title="InSource Software"><img src="images/in_square_orange.png" height="22" class="rounded-corners" /></a>\n      </p>\n    </div>\n  </nav>\n</template>'}),define("text!shopping-list.html",["module"],function(t){t.exports='<template>\n  <div class="row shopping-list">\n    <div class="col-lg-4 col-md-6 col-sm-9">\n      <form class="inline-form well">\n        <div class="form-group">\n          <label class="sr-only" for="listName">Name</label>\n          <input type="text" id="listName" class="form-control form-label" value.bind="listName" placeholder="Shopping List" blur.trigger="saveProperties()" />\n        </div>\n        <div class="form-group pull-right">\n          <button type="button" class="btn btn-sm btn-${isEditing ? \'success\' : \'default\'}" click.trigger="toggleEditing()">\n            <span class="glyphicon glyphicon-${isEditing ? \'ok\' : \'edit\'}"></span>\n            ${isEditing ? \'Done\' : \'Edit\'}\n          </button>\n        </div>\n        <div class="form-group" show.bind="isEditing">\n          <button type="button" class="btn btn-sm btn-danger" click.trigger="clearAll()">\n            <span class="glyphicon glyphicon-remove"></span>\n            Clear All\n          </button>\n          <button type="button" class="btn btn-sm btn-warning" click.trigger="clearPurchased()" show.bind="isPurchased">\n            <span class="glyphicon glyphicon-remove"></span>\n            Clear Purchased\n          </button>\n        </div>\n        <div class="form-group" repeat.for="item of items">\n          <button type="button" class="btn btn-xs btn-danger btn-delete" click.trigger="removeItem(item)" if.bind="isEditing">\n            <span class="glyphicon glyphicon-remove"></span>\n          </button>\n          <label>\n            <input type="checkbox" checked.bind="item.purchased" change.trigger="saveItems()" />\n            <span class="${item.purchased ? \'purchased\' : \'\'}" show.bind="!isEditing">${item.name}</span>\n            <input type="text" class="form-control form-item ${item.purchased ? \'purchased\' : \'\'}" value.bind="item.name" placeholder="Name" if.bind="isEditing" blur.trigger="saveItems()" />\n          </label>\n        </div>\n        <div class="form-group">\n          <div class="input-group">\n            <div class="input-group-btn" show.bind="isEditing">\n              <button type="submit" class="btn btn-sm btn-primary" click.trigger="addItem(name)">\n                <span class="glyphicon glyphicon-plus"></span>\n                Add\n              </button>\n            </div>\n            <input type="text" class="form-control new-form-item" value.bind="name" placeholder="New Item" />\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</template>'});