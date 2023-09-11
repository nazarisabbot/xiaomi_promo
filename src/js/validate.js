import JustValidate from 'just-validate';

const validate = (form, question) => {
  /* Form validate */
  const validateForm = new JustValidate(form);

  const email = form.email;
  const imei = form.imei;
  const checkold = form.checkold;

  validateForm.addField(email, [
    {
      rule: 'required',
      errorMessage: 'Заполните пожалуйста данное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный адрес электронной почты',
    },
  ]);

  validateForm.addField(imei, [
    {
      rule: 'required',
      errorMessage: 'Заполните пожалуйста данное поле',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Emei должен состоять как минимум из 11 цифр',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Emei должен состоять максимум из 11 цифр',
    },
  ]);

  validateForm.addField(checkold, [
    {
      rule: 'required',
      errorMessage: 'Вы должны подтвердить согласие с правилами акции',
    },
  ]);
  /* end */

  /* Question validate */
  const validateQuestion = new JustValidate(question);

  const name = question.name;
  const questionEmail = question.emailquestion;
  const message = question.message;
  const checkoldQuestion = question.checkoldquestion;

  validateQuestion.addField(name, [
    {
      rule: 'required',
      errorMessage: 'Заполните пожалуйста данное поле',
    },
  ]);

  validateQuestion.addField(questionEmail, [
    {
      rule: 'required',
      errorMessage: 'Заполните пожалуйста данное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный адрес электронной почты',
    },
  ]);

  validateQuestion.addField(message, [
    {
      rule: 'required',
      errorMessage: 'Заполните пожалуйста данное поле',
    },
    {
      rule: 'maxLength',
      value: 100,
      errorMessage: 'Сообщение не больше 100 символов',
    },
  ]);

  validateQuestion.addField(checkoldQuestion, [
    {
      rule: 'required',
      errorMessage: 'Вы должны подтвердить согласие с правилами акции',
    },
  ]);
  /* end */
};

export default validate;
