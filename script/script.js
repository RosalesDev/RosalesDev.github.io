const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,

  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },

  // Navigation arrows
  navigation: {
    enabled: false,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 3,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
});