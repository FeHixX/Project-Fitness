import Swiper from '../../vendor/swiper';


const initSliderReviews = () => {
  const swiper = new Swiper('.reviews__content', {
    grabCursor: true,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });

  return swiper;
};


export {initSliderReviews};
