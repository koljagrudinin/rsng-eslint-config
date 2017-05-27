
Помещайте всю стартовую логику в функцию activate/init

25/36
  
Пример
//плохо
    function AvengersController(dataservice) {
        var vm = this;
        vm.avengers = [];
        vm.title = 'Avengers';
        dataservice.getAvengers().then(function(data) {
            vm.avengers = data;
            return vm.avengers;
}); }
//хорошо
    function AvengersController(dataservice) {
        var vm = this;
        vm.avengers = [];
        vm.title = 'Avengers';
activate();
        ////////////
        function activate() {
            return dataservice.getAvengers().then(function(data) {
                vm.avengers = data;
                return vm.avengers;
            });
} }