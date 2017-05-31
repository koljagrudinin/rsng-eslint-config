//ля конвертирования массивоподобных объектов также используйте Array.prototype.slice в связке
// с Function.prototype.call
//Пример
function trigger(items) {
    var args = Array.prototype.slice.call(items);
    args[3] = 0;
    //...
}

trigger([1, 2, 3]);
