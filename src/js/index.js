import softScroll from './softScroll.js';
import burger from './burger.js';
import validate from './validate.js';

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
    try {
      const response = await fetch(
        'http://xiaomipromo.kz:81/api/v1/code/receive',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(toSentDataObjForPromo),
        },
      );

      if (response.ok) {
        console.log('Данные успешно отправлены');
        /* Здесь вызов модального окна */
        form.reset();
      } else {
        console.error('Ошибка при отправке данных:', response.statusText);
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
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
    try {
      const response = await fetch('http://xiaomipromo.kz:81/api/v1/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toSentDataObj),
      });

      if (response.ok) {
        console.log('Данные успешно отправлены');
        /* Здесь вызов модального окна */
        question.reset();
      } else {
        console.error('Ошибка при отправке данных:', response.statusText);
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }
});
