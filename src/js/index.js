import softScroll from './softScroll.js';
import burger from './burger.js';

const headerPoint = document.querySelectorAll('.header__point');
const burgerMenu = document.querySelector('.burger__btn');
const menu = document.querySelector('.burger__body');

softScroll(headerPoint);
burger(burgerMenu, menu);

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
