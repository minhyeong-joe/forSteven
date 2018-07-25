$(document).ready(function(){
// Navbar behaviors ****************************************
  // Products menu dropdown
    $(".product-dropdown-button").click(function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('.product-dropdown').stop(true,true).slideToggle(300);
    });

// Mobile Collapse Menu button
    $(".collapse-btn").click(function(){
      $(this).toggleClass("expand");
      $(".lower-nav").stop(true,true).slideToggle(300);
      $("body").toggleClass("no-scroll");
    });

  // Lower navbar fixed on scroll down
  // works only for desktop and tablet view
  var deviceWidth = $(window).width();
  if(deviceWidth >= 465) {
    var scrollPosition = $(window).scrollTop();
      $(window).scroll(function() {
        scrollPosition = $(window).scrollTop();
        if(scrollPosition >= 80) {
          // change lower navbar to fixed
          $('.lower-nav').addClass("fixed");
        } else {
          // change lower navbar to normal
          $('.lower-nav').removeClass("fixed");
        }
      })
  }

  // For development purpose
  // console.log(deviceWidth);


// Home page ******************************************|

  // banner btn slide down to featured
  $('.banner-btn').click(function(e) {
    e.preventDefault();
    var featuredTop = $('.container-featured').offset().top;
    $('html,body').animate({
      scrollTop: featuredTop -100
    },500);
  })

});
