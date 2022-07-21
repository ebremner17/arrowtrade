(function ($, Drupal) {
  Drupal.behaviors.responsiveMenu = {
    attach: function (context, settings) {

      $('.header-container--menu-button').off('click').click(function() {

        $(this).toggleClass("change");

        $('.header-container').toggleClass('show-menu');
      });
    }
  };
})(jQuery, Drupal);