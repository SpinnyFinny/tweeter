$(function(){

  var tweetData = {
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
  }

  function createTweetElement(tweetData){
    
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
  
  var $tweet = createTweetElement(tweetData);
  $('#tweet-container').append($tweet); 
});
