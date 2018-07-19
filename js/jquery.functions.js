// returning the calculator to it's previous state
function resetCalculator () {

  $('.calculator_operation').css('border', '1px solid black');
  $('#right_display').empty();

  /*$state = 'nan';
  console.log($state);*/

}

// function for finishing the calculation using the '=' button
function finishCalculation ($state) {

  console.log($state);

  var sum = $('#left_display').text();
  sum = parseFloat(sum);
  var sum2 = $('#right_display').text();
  sum2 = parseFloat(sum2);

  if ($(right_display).text() === null || $(right_display).text() === '')
    console.log('right display empty');

  else if (typeof $state === 'undefined')
    console.log('state of mathematical operation is undefined');

  else if ($state === '+')
    $('#left_display').text(sum2 + sum);

  else if ($state === '-')
    $('#left_display').text(sum2 - sum);

  else if ($state === '*')
    $('#left_display').text(sum2 * sum);

  else if ($state === '%')
    $('#left_display').text(sum2 / sum);

  resetCalculator();

}
