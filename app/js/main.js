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
});