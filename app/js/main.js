new Swiper('.museum-swiper', {
   /* mousewheel: {},
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   }, */
   navigation: {
      nextEl: '.museum-button-next',
      prevEl: '.museum-button-prev'
   },
   slidesPerView: 1,
   spaceBetween: 50,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   autoHeight: true,
   breakpoints: {
      // when window width is >= 992px
      //992: {
      //   autoHeight: true,
      //}
   }
});

$('.museum-button-next, .museum-button-prev').click(function () {
   var
      s = $('.slider-container').offset().top - 10;
   $("body,html").animate({
      scrollTop: s
   }, 100);
});
