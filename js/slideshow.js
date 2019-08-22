(function ($, Drupal) {
  Drupal.behaviors.slideshowBehavior = {
    attach: function (context, settings) {
      $('.view-at-view-cover-page-slideshow .view-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1012,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 797,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      function change_background_image() {
        console.log('CHANGE');

        images = new Array('nature', 'nature2', 'nature3', 'nature4');

        var new_image = images[Math.floor(Math.random()*images.length)];

        var image_url = $('.view-at-view-cover-page-slideshow').css('background-image');
        image_url = image_url.replace('url("', '');
        image_url = image_url.replace('url("', '');
        image_url = image_url.replace('")', '');

        image_url_parts = image_url.split('/');
        image_name = image_url_parts[image_url_parts.length - 1];
        image_name = image_name.replace('.jpg', '');

        image_url = image_url.replace(image_name, new_image);
        console.log(image_url);

        $('.view-at-view-cover-page-slideshow').css('background-image', "url('" + image_url + "')");

        setTimeout(change_background_image, 3000);
      }
      // use setTimeout() to execute
      setTimeout(change_background_image, 3000);
    }
  };
})(jQuery, Drupal);