/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


const slider = document.querySelector('.slider');
document.querySelector('.slider__range').addEventListener('input', (event) => {
  slider.style.setProperty('--slide-width', `${event.target.value}%`);
});
