Контроллеры
Используйте controllerAs синтакcис. Это позволяет обращаться к св­вам/методам через точкy и избавляет от обращения через $parent
 23/36
  
Пример
//плохо
    function CustomerController($scope) {
        $scope.name = {};
        $scope.sendMessage = function() { };
}
    <div ng‐controller="CustomerController">
        {{ name }}
</div>
//хорошо
    <div ng‐controller="CustomerController as customer">
        {{ customer.name }}
</div>
    function CustomerController() {
        this.name = {};
        this.sendMessage = function() { };
    }
