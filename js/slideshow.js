(function ($, Drupal) {
  Drupal.behaviors.slideshowBehavior = {
    attach: function (context, settings) {
      $('.view-at-view-cover-page-slideshow .view-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    }
  };
})(jQuery, Drupal);