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
  }
}
