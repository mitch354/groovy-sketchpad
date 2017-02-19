$(document).ready(function() {
  for(i=0; i < 16; i++){
    $('#container').append('<div class="row"></div>');
  }
  $('.row').each(function(){
    for(i=0; i < 16; i++){
      $(this).append('<div class="square"></div>');
    }
  });
  $('.square').mouseenter(function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(this).css('background-color', '#'+randomColor);
  });
  $(document).on('click', '#button', function(){
    $('.square').each(function(){
      for(i=0; i < 16; i++){
        $(this).css('background-color', 'white');
      }
    });
  });
  $(document).on('click', '#button2', function(){
    var doc = new jsPDF();
    doc.addHTML($('#container')[0], 15, 15, {
      'background': '#fff',
    }, function() {
      doc.save('sample-file.pdf');
    });
  });
});
