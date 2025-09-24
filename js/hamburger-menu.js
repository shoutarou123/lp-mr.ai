$(function () {
  var $header = $('#header');
  var $hamburgerCloseBtn = $('#hamburgerCloseBtn');
  var $hamburgerOpenBtn = $('#hamburgerOpenBtn');
  var $navigation = $('.navigation');

  $hamburgerCloseBtn.click(function () {
    $hamburgerCloseBtn.addClass('hidden');
    $hamburgerOpenBtn.removeClass('hidden');
    $header.css('background-color', '#FFF');
    $navigation.slideToggle(300);
  });

  $hamburgerOpenBtn.click(function () {
    $hamburgerOpenBtn.addClass('hidden');
    $hamburgerCloseBtn.removeClass('hidden');
    $header.css('background-color', '');
    $navigation.slideToggle(300);
  });

  $('.navigation_link').click(function() {
    $hamburgerCloseBtn.removeClass('hidden');
    $hamburgerOpenBtn.addClass('hidden');
    $header.css('background-color', '#FFF');
    $navigation.slideUp(300);
  });
});
