import Swiper from '../../vendor/swiper';

const addSliderReviews = () => {
  if (document.querySelector('.reviews__content')) {
    const swiper = new Swiper('.reviews__content', {
      grabCursor: true,
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
    return swiper;
  }
  return null;
};


export {addSliderReviews};
