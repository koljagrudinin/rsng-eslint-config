//Помещайте логику по работе с данными в фабрики/сервисы. Делайте их способными к XHR взаимодействию, 
//локальному хранилищу (localStorage), кешированию в памяти и пр.Обязанность контроллера ­ презентация 
//и сбор информации с представления.Он не должен знать откуда получаются данные, он только должен знать, кого нужно "спросить" об этом
// 27/36
  
//Пример
    // dataservice factory
    angular
        .module('app.core')
        .factory('dataservice', dataservice)
        .controller('AvengersController', AvengersController);
    dataservice.$inject = ['$http', 'logger'];
    function dataservice($http, logger) {
        return {
            getAvengers: getAvengers
        };
        function getAvengers() {
            return $http.get('/api/maa')
                .then(getAvengersComplete)
                .catch(getAvengersFailed);
            function getAvengersComplete(response) {
                return response.data.results;
}
            function getAvengersFailed(error) {
                logger.error('XHR Failed for getAvengers.' + error.data);
} }
    }
    function AvengersController(dataservice, logger) {
        var self = this;
        this.avengers = [];
activate();
        function activate() {
            return getAvengers().then(function() {
                logger.info('Activated Avengers View');
            });
}
        function getAvengers() {
            return dataservice.getAvengers()
                .then(function(data) {
                    return self.avengers = data;
}); }
}