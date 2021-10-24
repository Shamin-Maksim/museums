new Swiper('.museum-swiper', {
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
      // when window width is >= 320px
      992: {
         autoHeight: false
      }
   }
});