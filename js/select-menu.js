$('.select_text_content').on('click', function() {
  $('.select_text_content').removeClass('active');
  $(this).addClass('active');
  
  // 全エリアを一旦非表示
  $('.display_after_select').hide();
  
  // data属性でターゲットを取得して表示
  var target = $(this).data('target');
  $('#' + target).show();
});