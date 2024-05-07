
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/slideshow/1.jpeg", 
      "images/slideshow/2.jpeg",
      "images/slideshow/4.jpeg",
      "images/slideshow/5.jpeg",
      "images/slideshow/6.jpeg",
      "images/slideshow/7.jpeg",
      "images/slideshow/8.jpeg",
      "images/slideshow/9.jpeg",
      "images/slideshow/10.jpeg",
      "images/slideshow/11.jpeg",
      "images/slideshow/12.jpeg",
      "images/slideshow/13.jpeg",
      "images/slideshow/14.jpeg",
      "images/slideshow/15.jpeg",
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);


