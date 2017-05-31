//Имена контроллеров должны быть в PascalCase, сервисов, фабрик, директив ­ camelCase. Имена контроллеров должны содержать суффикс "Controller"
//Пример
//хорошо
    angular
        .module
        .controller('HeroAvengersController', HeroAvengersController);
    function HeroAvengersController() { }
    // credit.service.js
    angular
        .module
        .factory('creditService', creditService);
    function creditService() { }
    // customer.service.js
    angular
        .module
        .service('customerService', customerService);
    function customerService() { }
    // avenger‐profile.directive.js
    angular
        .module
        .directive('xxAvengerProfile', xxAvengerProfile);
    // usage is <xx‐avenger‐profile> </xx‐avenger‐profile>
    function xxAvengerProfile() { }
