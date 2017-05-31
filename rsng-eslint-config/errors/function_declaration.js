//Помещайте "привязанные" (bindable) данные наверх контроллера для повышения читабельности. Используйте function declaration

//Пример
//плохо
    function SessionsController() {
        this.gotoSession = function() {
/* ... */
        };
        this.refresh = function() {
/* ... */
        };
        this.search = function() {
/* ... */
        };
        this.sessions = [];
        this.title = 'Sessions';
}
//хорошо
    function SessionsController() {
        var vm = this;
        vm.gotoSession = gotoSession;
        vm.refresh = refresh;
        vm.search = search;
        vm.sessions = [];
        vm.title = 'Sessions';
        ////////////
        function gotoSession() {
          /* */
}
        function refresh() {
          /* */
}
        function search() {
          /* */
} }