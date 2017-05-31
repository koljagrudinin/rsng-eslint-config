//ля конвертирования массивоподобных объектов также используйте Array.prototype.slice в связке с Function.prototype.call
//Пример
    function trigger() {
      var args = Array.prototype.slice.call(arguments);
      //...
}
