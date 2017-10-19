$(function(){
  $('.tweet-composer textarea').on('keyup', function(){
    var availableChars = 140 - $(this).val().length;
    var counterCount = $('#char-counter').html(availableChars);
    if(availableChars < 0) {
      counterCount.css({'color': 'red'});      
    } else {
      counterCount.css({'color': ''});
    }
  });
});
