$(function() {
  var $upBtn = $('#js-pageTop');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
      $upBtn.fadeIn();
    } else {
      $upBtn.fadeOut();
    }
  });
  $upBtn.click(function() {
    $('body, html').animate({scrollTop: 0}, 300);
    return false;
  });
});