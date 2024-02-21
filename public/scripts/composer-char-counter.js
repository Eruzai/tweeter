// Character counter script for composing tweets
$(document).ready(function() {
  $("#tweet-text").on('input change', function() {

    const text = $(this).val();

    const remainingChars = 140 - text.length;

    const counter = $(this).parent().find('.counter');

    counter.text(remainingChars);

    remainingChars < 0 ? counter.addClass('char-overflow') : counter.removeClass('char-overflow');
  });
});
