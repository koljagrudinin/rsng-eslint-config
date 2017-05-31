//Используйте именованные ф­ункции вместо анонимных

// плохо
angular
    .module('app')
    .controller('DashboardController', function () { })
    .factory('logger', function () { });

function DashboardController() { }

// хорошо
angular
    .module('app')
    .controller('DashboardController', DashboardController);

function logger() { }

angular
    .module('app')
    .factory('logger', logger);
