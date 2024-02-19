/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElement = function (tweetObject) {
    const profilePic = tweetObject.user.avatars;
    const userName = tweetObject.user.name;
    const userHandle = tweetObject.user.handle;
    const tweetContent = tweetObject.content.text;
    const timeCreated = tweetObject.created_at;

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
  }
  
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }
  
  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});