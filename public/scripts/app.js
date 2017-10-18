$(function(){

  function renderTweets(tweets) {
    for(tweet of data){
      debugger;
      $('#tweet-container').append(createTweetElement(tweet));
    }
  }

  function createTweetElement(tweetData) {
    
    var tweet = $(`<article class="tweet card-container">
    <header>
        <img class='avatar' src=${tweetData.user.avatars.regular}>
        <h2>${tweetData.user.name}</h2>
        <span class="tweet-author">${tweetData.user.handle}</span>
    </header>
      <div class="tweet-body clearfix">
        <p>${tweetData.content.text}</p>
      </div>
    <footer class="clearfix">
      <span>${tweetData.created_at} ago</span>
      <div class="mini-icons">
        <img src="/images/flag.png">
        <img src="/images/repost.png">
        <img src="/images/heart.png">
      </div>
    </footer>
    </article>`)
    return tweet;
  }
  
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  
  renderTweets(data);

});
