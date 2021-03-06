// Оборачивайте Angular компоненты в функции моментального вызова
// Пример
//плохо

angular
    .module('app')
    .factory('logger', logger);
// logger функция объявлена в глобальной области видимости
function logger() { }
angular
    .module('app')
    .factory('storage', storage);
// storage функция объявлена в глобальной области видимости
function storage() { }

storage();
//хорошо
(function () {
    'use strict';
    angular
        .module('app')
        .factory('logger', logger);
    function logger2() { }

    logger2();
})();
