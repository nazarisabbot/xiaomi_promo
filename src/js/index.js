import softScroll from './softScroll.js';
import burger from './burger.js';
import validate from './validate.js';

const form = document.querySelector('#form');
const question = document.querySelector('#question');
const headerPoint = document.querySelectorAll('.header__point');
const burgerMenu = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');

softScroll(headerPoint);
burger(burgerMenu, list);
validate(form, question);

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
