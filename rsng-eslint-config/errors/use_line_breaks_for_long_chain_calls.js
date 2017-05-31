// Использйте новый абзац для длинных цепочек. Испрользуйте ведущую точку, которая показывает, что это вызов метода
//  11/36

// Пример
// плохо
$('#items').find('.selected').highlight().end().find('.open').updateCount();
// плохо
$('#items').
  find('.selected').
  highlight().
  end().
  find('.open').
  updateCount();
// хорошо
$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount();
// плохо
var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
  .attr('width', (radius + margin) * 2).append('svg:g')
  .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
  .call(tron.led);
// хорошо
var leds = stage.selectAll('.led')
  .data(data)
  .enter().append('svg:svg')
  .classed('led', true)
  .attr('width', (radius + margin) * 2)
  .append('svg:g')
  .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
  .call(tron.led);
