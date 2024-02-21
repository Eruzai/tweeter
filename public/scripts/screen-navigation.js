$(document).ready(function() {
  $(".window-scroll").on('click', function() {
    $('html, body').animate({scrollTop: '400'}, 'slow', function() {$('#tweet-text').trigger('focus');})
  });
});