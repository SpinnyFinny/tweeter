$(function() {

  var tweetTemplate = $("#displayed-tweet-template").html();
  var compiledTweetTemplate = Handlebars.compile(tweetTemplate);

  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: 'json'
    }).done(function(data) {
      $("#tweets-container").html(compiledTweetTemplate(data));
    })
  }

  var newTweetForm = $(".tweet-composer form");
  newTweetForm.on('submit', function(event){
    event.preventDefault();
    var tweetText = $('#tweet-text').val()
    $('#tweet-text').on('focus', function() {
      $('#submit-tweet-error').html('').css({'visibility': 'hidden'})
    });
    if(tweetText.length <= 0){
      $('#submit-tweet-error').html('Please enter some text').css({'visibility': 'visible'})
      return;
    } else if (tweetText.length > 140) {
      $('#submit-tweet-error').html('Your tweet is too long').css({'visibility': 'visible'})
      return;
    }
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize(),
      context: this
    }).done(function() {
      this.reset();
      $('#char-counter').html(140);
      loadTweets();
    });
  })
  
  $('#compose-button').on('click', function() {
    $('#tweet-text').focus();
    $('.tweet-composer').slideToggle();
  });
  
  loadTweets();
});
