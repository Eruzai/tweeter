// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function() {
  // Function creates JQuery tweet HTML from tweetObject data
  const createTweetElement = function (tweetObject) {
    // Simplified tweetObject data
    const profilePic = tweetObject.user.avatars;
    const userName = tweetObject.user.name;
    const userHandle = tweetObject.user.handle;
    const tweetContent = tweetObject.content.text;
    const timeCreated = tweetObject.created_at;
    
    // Creates HTML article with data from tweetObject
    const $tweet = $(`<article class="tweet">
  <header>
    <div>
      <img src="${profilePic}" alt="photo">
      <p>${userName}</p>
    </div>
    <p>${userHandle}</p>
  </header>
  <div class="text">
    <p>${tweetContent}</p>
  </div>
  <footer>
    <p class="posted-time">${timeCreated}</p>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`);

    return $tweet;
  };

  // Function loops through an array containing tweet objects and posts each of them to the page
  const renderTweets = function (tweetObjectsArray) {
    for (tweet of tweetObjectsArray) {
      const $tweetToPost = createTweetElement(tweet);
      $('.tweets-container').append($tweetToPost);
    }
  };

  renderTweets(data);

  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();
  });
});