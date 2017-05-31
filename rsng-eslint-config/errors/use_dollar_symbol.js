//Angular $ сервисы
//Используйте $document и $window вместо document и window
//$timeout и $interval. Используйте, но стоит быть аккуратными при использовании их с вещами, никак не меняющими модель и никак не нуждающихся в $digest. Например, если Вам нужно изменить цвет у элемента через 300мс, то Вам $digest ни к чему, поэтому используйте для таких целей либо необязательный параметр invokeApply = false, либо обычный setTimeout/setInterval
//Пример
////плохо
//    ...
$timeout(function () {
  $element.css('color', 'red');
}, 300);
//  ...
//лучше
//...
$timeout(function () {
  $element.css('color', 'red');
}, 300, false);
//...
//хорошо
//  ...
setTimeout(function () {
  $element.css('color', 'red');
}, 300);
//...
//Пример
//плохо
//...
setTimeout(function () {
  model = 5;
  scope.$apply();
}, 300);
//...
//хорошо
//...
$timeout(function () {
  model = 5;
}, 300);