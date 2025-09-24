$(document).ready(function() {
  $('.plus_icon').on('click', function(){
    var parent = $(this).closest('.q_a_content');
    $(this).hide();
    parent.find('.cross_icon').show();
    parent.find('.answer_content_flex').css('display', 'flex');
  });
  $('.cross_icon').on('click', function(){
    var parent = $(this).closest('.q_a_content');
    $(this).hide();
    parent.find('.plus_icon').show();
    parent.find('.answer_content_flex').hide();
  });
});