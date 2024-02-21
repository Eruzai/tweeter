$(document).ready(function() {

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
  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();

    const text = $(this).find('#tweet-text').val();
    const charsUsed = text.length;

    if (text === '' || text === null) { //checks if tweet has content
      alert("You must enter a message to tweet!");
    } else if (charsUsed > 140) { //checks if character limit reached
      alert("You have gone over the 140 character limit!");
    } else {
      const data = $(this).serialize();
      $(this).find('#tweet-text').val(''); //clears the form
      $.post('/tweets', data) //makes tweet
      .then(function() {
        loadTweets();
      });
    };
  });

  loadTweets();
});