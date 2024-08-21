/**
 *
 * HOME PAGE CAROUSEL (powered by Slick Carousel)
 *
 * DOCUMENTATION: https://kenwheeler.github.io/slick/
 * CDN: //cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js
 * -----------
 */
export function setupCarousselFct() {
  if ($) {
    $("#enjanga-caroussel-1")
      .removeClass("d-none") // Removes the class that hides the markup
      // (will remain hidden in case js fails to load)
      // (The markup looks unprofessional before js kicks in, so it's best to hide it)
      .slick({
        // dots: true,
        speed: 300,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });



      /**
       * TODO:
       * ORGANIZE THIS INTO A NICE FUNCTION
       */

      // Cache selectors for performance
      var $prevButton = $('.btn-carousel-prev');
      var $nextButton = $('.btn-carousel-next');
      var $carousel = $('#enjanga-caroussel-1');

      // Initial check to disable/enable buttons
      updateButtons();

      // Bind custom buttons to Slick methods
      $prevButton.on('click', function(){
        $carousel.slick('slickPrev');
      });

      $nextButton.on('click', function(){
        $carousel.slick('slickNext');
      });

      // Listen to the afterChange event
      $carousel.on('afterChange', function(event, slick, currentSlide){
        updateButtons();
      });

      // Function to enable/disable buttons
      function updateButtons() {
        var slick = $carousel.slick('getSlick');
        var currentSlide = slick.currentSlide;
        var slideCount = slick.slideCount;

        // Disable the "Prev" button if on the first slide
        if (currentSlide === 0) {
          $prevButton.prop('disabled', true);
        } else {
          $prevButton.prop('disabled', false);
        }

        // Disable the "Next" button if on the last slide
        if (currentSlide === slideCount - 1) {
          $nextButton.prop('disabled', true);
        } else {
          $nextButton.prop('disabled', false);
        }
      } 




  }
}
