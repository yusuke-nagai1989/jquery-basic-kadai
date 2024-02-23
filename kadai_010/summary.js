$(function() {

  // 文字色変化を押したとき、赤に変化
  $('#change-color').on('click', ()=> {
    $('#target').css('color','red');
  });

  // 文字内容変化を押したとき
  $('#change-text').on('click', ()=> {
    $('#target').text('Hello!');
  });

  // フェードアウトを押したとき
  $('#fade-out').on('click', ()=> {
    $('#target').fadeOut()
  });

  // フェードインを押したとき
  $('#fade-in').on('click', ()=> {
    $('#target').fadeIn()
  });

});