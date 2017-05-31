//Ставьте пробел перед круглой скобкой в конструкция if, while и т.д.. Удаляйте пробелы перед списком аргументов при вызове функциии при создании ф­и
//Пример
// плохо
    if(isJedi) {
      fight ();
}
// хорошо
    if (isJedi) {
      fight();
}
// плохо
    function fight () {
      console.log ('Swooosh!');
}
// хорошо
    function fight() {
      console.log('Swooosh!');
}
