$(document).ready(function() {
  $(".window-scroll").on('click', function() {
    $("html, body").animate({scrollTop: '400'}, 'slow', function() {
      $('#tweet-text').trigger('focus');
      $(".to-top").hide();
      $("nav button").show();
    });
  });

  $(window).on('scroll', function() {
    const windowLocation = $(this).scrollTop();
    if (windowLocation > 400) {
      $(".to-top").show();
      $("nav button").hide();
    } else {
      $(".to-top").hide();
      $("nav button").show();
    };
  });
});