Блоки кода
Используйте скобки для многострочного блока
  
Пример
// плохо
    if (test)
      return false;
// хорошо
    if (test) return false;
// хорошо
    if (test) {
      return false;
}
// плохо
    function () { return false; }
// хорошо
    function () {
      return false;
}
Пример
// плохо
    if (test) {
      thing1();
      thing2();
} else {
thing3(); }
// хорошо
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
}
