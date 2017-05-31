//   Используйте [] нотацию для доступа к свойства через переменную
//Пример
var luke = {
  jedi: true,
  age: 28
};
function getProp(prop) {
  return luke[prop];
}
var isJedi = getProp('jedi');
