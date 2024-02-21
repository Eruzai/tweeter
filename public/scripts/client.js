$(document).ready(function() {
  // Function escapes text to avoid script injection etc.
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Function creates JQuery tweet HTML from tweet object data
  const createTweetElement = function (tweetObject) {

    // Simplified tweetObject data
    const profilePic = tweetObject.user.avatars;
    const userName = tweetObject.user.name;
    const userHandle = tweetObject.user.handle;
    const tweetContent = tweetObject.content.text;
    const timeCreated = timeago.format(tweetObject.created_at);
    
    // Creates HTML article with data from tweet object
    const $tweet = $(`<article class="tweet">
  <header>
    <div>
      <img src="${profilePic}" alt="photo">
      <p class="username">${userName}</p>
    </div>
    <p class="user-handle">${userHandle}</p>
  </header>
  <div class="text">
    <p>${escape(tweetContent)}</p>
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
    $('.tweets-container').empty();
    for (tweet of tweetObjectsArray) {
      const $tweetToPost = createTweetElement(tweet);
      $('.tweets-container').prepend($tweetToPost);
    };
  };

  // Function gets tweet data from /tweets and renders it on page
  const loadTweets = function() {
    $.get('/tweets')
    .then(function(data) {
      renderTweets(data);
    });
  };

  // Sends new tweet data to server
  $('.new-tweet').on('submit', function(event) {
    event.preventDefault();

    const $textObject = $(this).find('#tweet-text');
    const plainText = $textObject.val();
    const charsUsed = plainText.length;
    const serialText = $textObject.serialize();
    const $emptyMessage = $(this).find('.empty-message');
    const $charLimitReached = $(this).find('.char-limit-reached')

    $emptyMessage.slideUp('slow'); //hides errors if any exist
    $charLimitReached.slideUp('slow');

    if (plainText === '' || plainText === null) { //checks if tweet has content
      $emptyMessage.slideDown('slow');
    } else if (charsUsed > 140) { //checks if character limit reached
      $charLimitReached.slideDown('slow');
    } else {
      $textObject.val('').trigger('change'); //clears the form and triggers a change event to reset character counter
      $.post('/tweets', serialText) //makes tweet
      .then(function() {
        loadTweets();
      });
    };
  });

  loadTweets();
});