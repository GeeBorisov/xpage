function header() {
  const buttons = document.querySelectorAll('.header__btn');
  const titles = document.querySelectorAll('.header__title');
  const headerContent = document.querySelector('.header__content');

  function updateHeaderBackground() {
    // Проверяем размер экрана
    if (window.matchMedia('(max-width: 320px)').matches) {
      // Если ширина экрана меньше или равна 320px, меняем фоновое изображение на playMob.png
      headerContent.style.backgroundImage = `url(../../img/header/header-bg-playMob.webp)`;
    } else {
      // Если ширина экрана больше 320px, используем стандартное изображение
      headerContent.style.backgroundImage = `url(../../img/header/header-bg-play.webp)`;
    }
  }

  // Вызываем функцию при загрузке страницы
  updateHeaderBackground();

  // Вызываем функцию при изменении размера экрана
  window.addEventListener('resize', updateHeaderBackground);

  buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
      titles.forEach((title, titleIndex) => {
        title.classList.add('is-hidden');
        if (titleIndex === index) {
          title.classList.remove('is-hidden');
        }
      });
      buttons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
    });
  });
}

export default header;
