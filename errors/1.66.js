Точки с запятой

  
Пример
//плохо
    (function () {
      var name = 'Skywalker'
      return name
})()
// хорошо
    (function () {
      var name = 'Skywalker';
      return name;
})();
    //Для конкатенации файлов с функциями мгновенного вызова
    ;(function () {
      var name = 'Skywalker';
      return name;
})();
