const isMouseCardHover = () => {
  const root = document.querySelector('.subscriptions');
  const cards = root.querySelectorAll('.cards__item');

  cards.forEach((card) => {
    const button = card.querySelector('.cards__button');

    card.addEventListener('mouseover', () => {
      button.classList.toggle('is-active');
    });

    card.addEventListener('mouseout', () => {
      button.classList.toggle('is-active');
    });
  });
};

export {isMouseCardHover};
