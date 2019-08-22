(function ($, Drupal) {
  Drupal.behaviors.slideshowBehavior = {
    attach: function (context, settings) {
      console.log('HERE3333');
      $('.your-class').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    }
  };
})(jQuery, Drupal);