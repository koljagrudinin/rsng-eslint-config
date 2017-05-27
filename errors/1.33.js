   Операторы сравнения
Используйте === и !== вместо == и != . Используйте упрощенную форму
Пример
// плохо
    if (name !== '') {
      // ...stuff...
}
// хорошо
    if (name) {
      // ...stuff...
}
// плохо
    if (collection.length > 0) {
      // ...stuff...
}
// хорошо
    if (collection.length) {
      // ...stuff...
}