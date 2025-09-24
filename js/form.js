$(document).ready(function() {
  $('form').on('submit', function(e) {
    let isValid = true;

    $(this).find('.input').each(function() {
      if($(this).val().trim() === '') {
        $(this).next('.error_message').css('visibility', 'visible');
        $(this).addClass('input_error');
        isValid = false;
      } else {
        $(this).next('.error_message').css('visibility', 'hidden');
        $(this).removeClass('input-error');
      }
    });
    if(!isValid) {
      e.preventDefault();
    }
  });

  $('.input').on('input', function() {
    if($(this).val().trim() !== '') {
      $(this).next('.error_message').css('visibility', 'hidden');
      $(this).removeClass('input_error');
    }
  });
});