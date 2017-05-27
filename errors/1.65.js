оглашение по наименованию
  
Пример
    //Избегайте использования однобуквенных названий.
    //плохо
    var o = {};
    function c() {}
//хорошо
    function query() {}
    // Используйте camelCase при именовании обьектов, экземлпяров, функций:
    //плохо
    var OBJEEeee = {};
    var this_is_object = {};
//хорошо
    var thisIsMyObject = {};
    function thisIsMyFunction() {}
    //Используйте PascalCase при именовании конструктов и перечислений:
    // плохо
    function user(options) {
      this.name = options.name;
    }
    var плохо = new user({
      name: 'nope'
});
    var myEnum = {
        a: 1,
b:2 };
// хорошо
    function User(options) {
      this.name = options.name;
}
    var хорошо = new User({
      name: 'yup'
});
    var MyEnum = {
        A:1,
B:2 };
    //Используйте CONSTANT_CASE при именовании констант и значений перечислений
    //плохо
    var myConst = 23;
    var MyEnum = {

16/36
 

a:1,
b:2 };
//хорошо
var MY_CONST = 23;
var MyEnum = {
A:1,
B:2 };
//Помечайте приватные свойства/методы нижним подчеркиванием спереди, но лучше вовсе не выносите их в списо
function Car(){
    this._internalCarName = '..';
    //или лучше
    var internalCarName = '..';
}
Примечание. В связи с вводом автогенерируемых enum (перечислений) для фронта, при добавлении новых перечислений 
(которые существуют только на фронте), необходимо следовать следующей нотации. Но в новых проектах рекомендуется 
делать так, как описано выше

index.html
1 me.dialingResult = {
2 NoValue: 0,
3 DontDial: 1,
4 AnyError: 2,
5 InvalidPhone: 3,
6 Busy: 4,
7 NoAnswer: 5,
8 Drop: 6,
9 NotAvailable: 7,
10 Success: 8,
11 AnsweringMachine: 9,
12 TelephonyError: 10,
13 AnsweringMachineByNetworkCode: 11,
14 AnsweringMachineByAnalysis: 12,
15 IncorrectContact: 13
16 };
