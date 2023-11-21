const callModalWindow = (lang, res, flag) => {
  const body = document.body;

  const divModal = document.createElement('div');
  divModal.classList.add('modal');

  const container = document.createElement('div');
  container.classList.add('container');

  const divBody = document.createElement('div');
  divBody.classList.add('modal__body');

  const divCross = document.createElement('div');
  divCross.classList.add('modal__cross');
  divBody.appendChild(divCross);

  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  divCross.appendChild(span1);
  divCross.appendChild(span2);

  const img = document.createElement('img');
  const path = res === 'ok' ? './img/true.svg' : './img/false.svg';
  img.setAttribute('src', path);
  divBody.appendChild(img);

  const p = document.createElement('p');
  let message = '';

  switch (true) {
    case flag === 'question' && lang === 'ru' && res === 'ok':
      message =
        'Спасибо! Ваше сообщение было отправлено! Мы скоро свяжемся с вами.';
      break;

    case flag === 'question' && lang === 'ru' && res === '!ok':
      message = 'Ошибка сервера. Повторите попытку позднее.';
      break;

    case flag === 'question' && lang === 'kk' && res === 'ok':
      message =
        'Рахмет! Сіздің хабарламаңыз жіберілді! Біз сізге жақын арада жауап береміз.';
      break;

    case flag === 'question' && lang === 'kk' && res === '!ok':
      message = 'Сервер қателігі. Әрекетті кейінірек қайталаңыз.';
      break;

    case flag === 'form' && lang === 'ru' && res === 'ok':
      message = 'Промокод отправлен на вашу почту, проверьте папку СПАМ.';
      break;

    case flag === 'form' && lang === 'ru' && res === '!ok':
      message =
        'Ваш IMEI не найден в базе (не вносился, либо уже получил промокод).';
      break;

    case flag === 'form' && lang === 'kk' && res === 'ok':
      message =
        'Сіздің электрондық поштаңызға промокод жіберілді, СПАМ папкасын тексеріңіз.';
      break;

    case flag === 'form' && lang === 'kk' && res === '!ok':
      message =
        'Сіздің IMEI дерекқорда табылмады (промокод енгізілмеген немесе әлдеқашан алынған).';
      break;

    default:
      message = 'Неизвестная комбинация параметров.';
  }

  p.textContent = message;
  divBody.appendChild(p);

  divModal.appendChild(container);
  container.appendChild(divBody);
  body.appendChild(divModal);

  // Добавляем слушатель событий для закрытия модального окна
  divCross.addEventListener('click', hideModal);
  window.addEventListener('click', outsideClick);

  // Функция для скрытия модального окна
  function hideModal() {
    divModal.classList.add('noactive'); // Замените 'hidden' на ваш класс для скрытия модального окна
  }

  // Функция для проверки клика вне модального окна
  function outsideClick(e) {
    if (!divModal.contains(e.target)) {
      hideModal();
    }
  }
};

export default callModalWindow;
