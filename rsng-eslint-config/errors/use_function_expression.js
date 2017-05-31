//Функции
//Не объявляйте function declaration ( function a(){} ) в блоках if. Используйте function expression для этого ( var a = function() {} )
  
//Пример
// плохо
    if (currentUser) {
      function test() {
        console.log('Nope.');
      }
}
// хорошо
    var test;
    if (currentUser) {
      test = function test() {
        console.log('Yup.');
}; }
