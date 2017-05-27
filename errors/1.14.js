Оборачивайте Angular компоненты в функции моментального вызова

21/36
  
Пример
    //плохо
    // logger.js
    angular
        .module('app')
        .factory('logger', logger);
    // logger функция объявлена в глобальной области видимости
    function logger() { }
    // storage.factory.js
    angular
        .module('app')
        .factory('storage', storage);
    // storage функция объявлена в глобальной области видимости
    function storage() { }
//хорошо
    // logger.factory.js
    (function() {
        'use strict';
        angular
            .module('app')
            .factory('logger', logger);
        function logger() { }
})();
    // storage.js
    (function() {
        'use strict';
        angular
            .module('app')
            .factory('storage', storage);
        function storage() { }
})();
