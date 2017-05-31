//Именованные vs Анонимные функции Используйте именованные ф­и вместо анонимных

//Пример
//плохо
    angular
        .module('app')
        .controller('DashboardController', function() { })
        .factory('logger', function() { });
//хорошо
    // dashboard.js
    angular
        .module('app')
        .controller('DashboardController', DashboardController);
    function DashboardController() { }
// logger.js
    angular
        .module('app')
        .factory('logger', logger);
    function logger() { }
