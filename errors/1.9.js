Старайтесь в методах возвращать this, если это уместно для создания цепочек вызова

18/36
  
Пример
// плохо
    Jedi.prototype.jump = function jump() {
      this.jumping = true;
      return true;
};
    Jedi.prototype.setHeight = function setHeight(height) {
      this.height = height;
};
    var luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20); // => undefined
// хорошо
    Jedi.prototype.jump = function jump() {
      this.jumping = true;
      return this;
};
    Jedi.prototype.setHeight = function setHeight(height) {
      this.height = height;
      return this;
};
    var luke = new Jedi();
    luke.jump()
      .setHeight(20);

