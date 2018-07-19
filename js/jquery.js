$(document).ready( function () {

  $state = 'nan';


  $('.calculator_number').on('click', function () {

    // if previous state was infinity, the display will be emptied
    if ($('#left_display').html() === 'Infinity')
      $('#left_display').empty();

    // rewriting 0 if it's at the begining of a calculation
    if ($('#left_display').html() === '0') {
      $('#left_display').empty();
      $('#left_display').append($(this).html());
    }

    // checking for multiple '.' symbols in number
    else if ($('#left_display').html().indexOf('.') != -1 && $(this).html() === '.')
      console.log('Invalid operation');

    else
      $('#left_display').append($(this).html());

  });


  $('.calculator_operation').on('click', function () {

    if ($('#left_display').html() === '.') {
      console.log('Invalid operation');
      return;
    }

    $state = $(this).html();

    if ($state !== 'nan') {

      finishCalculation($state);
      $('#right_display').append($('#left_display').html());
      $('#left_display').empty();
      return;

    }

    //$('.calculator_operation').css('border', '1px solid black');
    //$(this).css('border', '1px solid red');

    //$state = $(this).html();

    $('#right_display').append($('#left_display').html());
    $('#left_display').empty();

    if ($state === '-' && $('#left_display').is(':empty')) {
      $('#left_display').append($(this).html());
    }

  });

  // empty calculator windows function
  $('.calculator_empty').on('click', function () {

    $('#left_display').empty();
    $('#right_display').empty();

  });


  // quick operations sqrt, x^2 and 1/x
  $('.calculator_quickoperation').on('click', function () {

    quicksum1 = $('#left_display').text();

    if (quicksum1 === '.') {
      console.log('Invalid operation');
      return;
    }

    quicksum1 = parseFloat(quicksum1);

    // sqrt
    if($(this).text() === 'sqrt()' && $('#left_display').text() !== null && $('#left_display').text() !== '')
      $('#left_display').text(Math.sqrt(quicksum1));

    // x^2
    else if($(this).text() === 'x^2' && $('#left_display').text() !== null && $('#left_display').text() !== '')
      $('#left_display').text((quicksum1 * quicksum1));

    // 1/x
    else if($(this).text() === '1/x' && $('#left_display').text() !== null && $('#left_display').text() !== '')
      $('#left_display').text((1 / quicksum1));

    $('#right_display').empty();

  });


  // finishing the calculator operation pressing the '=' button
  $('.calculator_finish').on('click', function () {

    finishCalculation ($state);

  });


});
