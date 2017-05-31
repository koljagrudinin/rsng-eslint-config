//Для клонирования массивов используйте Array.prototype.slice
//Пример
    var len = items.length;
    var itemsCopy = [];
    var i;
// плохо
    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
}
// хорошо
    itemsCopy = items.slice();
