Объявляйте переменные наверху в области видимости.
  
Пример
    function () {
      test();
      console.log('doing stuff..');
      //..other stuff..
      var name = getName();
      if (name === 'test') {
        return false;
}
      return name;
    }
// хорошо
    function () {
      var name = getName();
      test();
      console.log('doing stuff..');
      //..other stuff..
      if (name === 'test') {
        return false;
}
      return name;
    }
