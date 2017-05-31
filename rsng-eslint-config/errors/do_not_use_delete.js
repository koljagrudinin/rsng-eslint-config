
//Delete.Пользуйтесь this.foo = null.Удаление св- ва гораздо медленнее, чем просто присваивание null.Следует избегать использования ключевого слова delete, за исключением случаев, когда необходимо удалить свойство из итерированного списка ключей объекта  или для изменения результата  if (key in obj) 


//плохо
Foo.prototype.dispose = function () {
    delete this.property_;
};

//хорошо
Foo.prototype.dispose = function () {
    this.property_ = null;
};