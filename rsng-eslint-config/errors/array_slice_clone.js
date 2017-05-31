//Для клонирования массивов используйте Array.prototype.slice
//Пример

var items = [1, 2, 3],

    len = items.length,
    itemsCopy = [],
    i;
// плохо
for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
}
// хорошо
itemsCopy = items.slice();
