//Кешируйте jQuery поиск

//Пример
// плохо
function setSidebar1() {
    $('.sidebar').hide();
    // ...stuff...
    $('.sidebar').css({
        'background‐color': 'pink'
    });
}

setSidebar1();
// хорошо
function setSidebar2() {
    var $sidebar = $('.sidebar');
    $sidebar.hide();
    // ...stuff...
    $sidebar.css({
        'background‐color': 'pink'
    });
}

setSidebar2();