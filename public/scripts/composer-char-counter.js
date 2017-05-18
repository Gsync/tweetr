$(document).ready(function() {

  $('.new-tweet form textarea').on('keyup', function() {
    var max = 140;
    var charLen = $(this).val().length;
    var charLeft = max - charLen;
    $('span.counter').text(charLeft);
    if (charLen > max) {
      $('.new-tweet span:first').addClass('red');
    } else {
      $('.new-tweet span:first').removeClass('red');

    console.log(charLeft);
    }
  });

});