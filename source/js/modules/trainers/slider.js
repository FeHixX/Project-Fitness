import Swiper from '../../vendor/swiper';


const initSliderTrainers = () => {
  const swiper = new Swiper('.trainers__content', {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
    },
  });

  return swiper;
};


export {initSliderTrainers};
