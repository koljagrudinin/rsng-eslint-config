
// Помещайте всю стартовую логику в функцию activate/init

// Пример
//плохо
(function AvengersController1(dataservice) {
    var vm = this;
    vm.avengers = [];
    vm.title = 'Avengers';
    dataservice.getAvengers().then(function (data) {
        vm.avengers = data;
        return vm.avengers;
    });
})();
//хорошо
(function AvengersController2(dataservice) {
    var vm = this;
    vm.avengers = [];
    vm.title = 'Avengers';
    activate();
    ////////////
    function activate() {
        return dataservice.getAvengers().then(function (data) {
            vm.avengers = data;
            return vm.avengers;
        });
    }
})();