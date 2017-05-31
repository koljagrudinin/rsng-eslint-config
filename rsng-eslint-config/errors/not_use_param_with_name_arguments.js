//Не именуйте параметр функции 'arguments'. Он будет иметь приоритет перед arguments ­ объектом, который доступен к области видимости функции
//Пример
// плохо
    function nope(name, options, arguments) {
      // ...stuff...
}
// хорошо
    function yup(name, options, args) {
      // ...stuff...
}
