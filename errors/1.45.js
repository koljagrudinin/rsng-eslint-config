спользуйте Array.prototype.push вместо прямого присваивания для добавления нового элемента в массив
Пример
    var someStack = [];
    // плохо
    someStack[someStack.length] = 'abracadabra';
    // хорошо
    someStack.push('abracadabra');