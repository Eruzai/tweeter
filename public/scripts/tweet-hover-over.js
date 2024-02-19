// Events for hovering over different tweet display elements
$(document).ready(function() {
  $("article.tweet").hover(function() {
    $(this).toggleClass('shadow');
  });

  $(".fa-flag").hover(function() {
    $(this).toggleClass('hover-color');
  });

  $(".fa-retweet").hover(function() {
    $(this).toggleClass('hover-color');
  });

  $(".fa-heart").hover(function() {
    $(this).toggleClass('hover-color');
  });
});