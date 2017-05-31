//AngularJS
//Single Responsibility. Объявляйте по одному компоненту в одном файле
//Пример
//плохо
angular
  .module('app', ['ngRoute'])
  .controller('SomeController', SomeController)
  .factory('someFactory', someFactory);
function SomeController() { }
function someFactory() { }

Пример
//хорошо
// app.module.js
angular
  .module('app', ['ngRoute']);
// some.controller.js
angular
  .module('app')
  .controller('SomeController', SomeController);
function SomeController() { }
// some.factory.js
angular
  .module('app')
  .factory('someFactory', someFactory);
function someFactory() { }