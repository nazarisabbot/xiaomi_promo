import softScroll from './softScroll.js';
import burger from './burger.js';
import validate from './validate.js';
import request from './request.js';
import callModalWindow from './callModalWindow.js';

const lang = document.querySelector('html').getAttribute('lang');
const form = document.querySelector('#form');
const question = document.querySelector('#question');
const headerPoint = document.querySelectorAll('.header__point');
const burgerMenu = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');

// softScroll(headerPoint);
burger(burgerMenu, list);
// validate(form, question, lang);
const {validateForm, validateQuestion} = validate(form, question, lang);

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formDataGetPromo = new FormData(e.target);

  const toSentDataObjForPromo = {
    imei: Number(formDataGetPromo.get('imei')),
    email: formDataGetPromo.get('email'),
  };

  const isFormValid = validateForm;

  if (isFormValid.isValid) {
    request('v1/code/receive', toSentDataObjForPromo, form).then((res) => {
      callModalWindow(lang, res, 'form');
    });
  }
});

question.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const toSentDataObj = {
    email: formData.get('emailquestion'),
    message: formData.get('message'),
  };

  const isFormValidQuestion = validateQuestion;

  if (isFormValidQuestion.isValid) {
    request('v1/feedback', toSentDataObj, question).then((res) => {
      callModalWindow(lang, res, 'question');
    });
  }
});
