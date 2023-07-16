const isButtonPlayVideo = () => {
  const root = document.querySelector('.description__player');
  const button = root.querySelector('button');
  const iframe = `
  <iframe width="100%" height="100%" src="${button.dataset.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

  button.addEventListener('click', () => {
    root.classList.add('description__player--play-video');
    root.innerHTML = iframe;
  }, {once: true});
};

export {isButtonPlayVideo};
