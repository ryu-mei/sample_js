window.addEventListener("DOMContentLoaded", () => {
  const sidewaySlider = new Swiper('.sideway-slider', {
    direction: 'vertical',
    loop: true,
    loopedSlides: 5,
    slidePerView: "auto",
    speed: 5000,
    direction: "horizontal",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    }
  });
})