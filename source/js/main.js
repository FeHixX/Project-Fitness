import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initTabs} from './vendor/tabs/init-tabs';
import {initAccordions} from './vendor/accordion/init-accordion';

import {isButtonSmoothScroll} from './modules/smooth-scroll';
import {isButtonPlayVideo} from './modules/description/player';
import {initSliderTrainers} from './modules/trainers/slider';
import {isMouseCardHover} from './modules/subscriptions/cards';
import {initSliderReviews} from './modules/reviews/slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    initTabs();
    initAccordions();

    isButtonSmoothScroll();
    isButtonPlayVideo();
    initSliderTrainers();
    isMouseCardHover();
    initSliderReviews();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
