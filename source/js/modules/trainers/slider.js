import Swiper from '../../vendor/swiper';

const addSliderTrainers = () => {
  if (document.querySelector('.trainers__content')) {
    const swiper = new Swiper('.trainers__content', {
      loop: true,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        590: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        995: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1310: {
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
  }
  return null;
};


export {addSliderTrainers};
