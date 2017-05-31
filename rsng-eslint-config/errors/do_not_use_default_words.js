//Не используйте зарезервированные слова как ключи, в старых браузерах возможны ошибки
// Пример
// плохо
var superman = {
    default: { clark: 'kent' },
    private: true
};
// хорошо
var superman = {
    defaults: { clark: 'kent' },
    hidden: true
};