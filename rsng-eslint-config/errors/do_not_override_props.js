
// Если Вы захотели вынести методы в прототип, то выносите их, присваивая 
//обьекту прототипа их, в противном случае вы перезатираете полностью просто ссылку на прототип
// Пример
function Jedi() {
    console.log('new jedi');
}
// плохо
Jedi.prototype = {
    fight: function fight() {
        console.log('fighting');
    },
    block: function block() {
        console.log('blocking');
    }
};
// хорошо
Jedi.prototype.fight = function fight() {
    console.log('fighting');
};
Jedi.prototype.block = function block() {
    console.log('blocking');
};
