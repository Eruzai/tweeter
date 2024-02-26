$(document).ready(function() {
  $(".window-scroll").on('click', function() {
    const targetLocation = $("main").offset().top - 120;
    $("html, body").animate({scrollTop: `${targetLocation}`}, 'slow', function() {
      $("#tweet-text").trigger('focus');
      $(".to-top").hide();
      $("nav button").show();
    });
  });
  
  $(window).on('scroll', function() {
    const windowLocation = $(this).scrollTop();
    const targetLocation = $("main").offset().top - 120;
    if (windowLocation > targetLocation) {
      $(".to-top").show();
      $("nav button").hide();
    } else {
      $(".to-top").hide();
      $("nav button").show();
    }
  });
});