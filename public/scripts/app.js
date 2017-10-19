$(function() {

  var tweetTemplate = $("#displayed-tweet-template").html();
  var compiledTweetTemplate = Handlebars.compile(tweetTemplate);

  function loadTweets(){
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

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize(),
      context: this
    }).done(function() {
      this.reset();
      loadTweets();
    });
  })
  loadTweets();
});
