document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 1300,
    dist: -370,
    shift: 80,
    padding: 80,
    numVisible: 15,
    indicators: true,
    noWrap: false,
  });
});
