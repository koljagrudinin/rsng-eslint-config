Пробелы
Ставьте пробел после первой скобки
Если Вы используете многострочные блоки с if и else, то ставьте else на ту же линию, на которой заканчивается блок if
  
Пример
// плохо
    function test(){
      console.log('test');
}
// хорошо
    function test() {
      console.log('test');
}
// плохо
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog'
});
// хорошо
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog'
});
