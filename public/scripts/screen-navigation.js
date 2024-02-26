//Script controls when buttons that scroll to tweet box are visible and how they function
$(document).ready(function() {
  $(".window-scroll").on('click', function() { // when the targetted buttons are clicked the page scrolls to the text box and focuses
    const targetLocation = $("main").offset().top - 120;
    
    $("html, body").animate({scrollTop: `${targetLocation}`}, 'slow', function() {
      $("#tweet-text").trigger('focus');
    });
  });
  
  $(window).on('scroll', function() { // when the page scrolls, determines what buttons to show or hide
    const windowLocation = $(this).scrollTop();

    const targetLocation = $("main").offset().top - 120;

    if (windowLocation > targetLocation) { // shows button on bottom of page and hides nav button when page has scrolled down sufficiently
      $(".to-top").show();
      $("nav button").hide();
    } else { // shows nav button and hides button on bottom of page
      $(".to-top").hide();
      $("nav button").show();
    }
  });
});