//Длинные строки (более ~100 символов), которые не помещаются на экране, следует разбивать используя строковую конкатенацию
//Пример
// плохо
    var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think a
// хорошо
    var errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
