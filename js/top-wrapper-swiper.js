(() => {
  const swiper = new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: 'true',
    effect: 'fade',
    speed: 7000,
    autoplay: {
      delay: 5000
    }
  });
})();
