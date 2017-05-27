Кешируйте jQuery поиск

19/36
  
Пример
// плохо
    function setSidebar() {
      $('.sidebar').hide();
      // ...stuff...
      $('.sidebar').css({
        'background‐color': 'pink'
}); }
// хорошо
    function setSidebar() {
      var $sidebar = $('.sidebar');
      $sidebar.hide();
      // ...stuff...
      $sidebar.css({
        'background‐color': 'pink'
}); }
