import JustValidate from 'just-validate';

const validate = (form, question, lang) => {
  /* Form validate */
  const validateForm = new JustValidate(form);

  const email = form.email;
  const imei = form.imei;
  const checkold = form.checkold;

  validateForm.addField(email, [
    {
      rule: 'required',
      errorMessage:
        lang === 'ru'
          ? 'Заполните, пожалуйста, данное поле'
          : 'Осы бапты толтырыңыз',
    },
    {
      rule: 'email',
      errorMessage:
        lang === 'ru'
          ? 'Введите корректный адрес электронной почты'
          : 'Өтінеміз қолданыстағы электронды пошта адресін енгізіңіз',
    },
  ]);

  validateForm.addField(imei, [
    {
      rule: 'customRegexp',
      value: /^\d+$/,
      errorMessage:
        lang === 'ru'
          ? 'IMEI должен состоять только из цифр'
          : 'IMEI тек сандардан тұруы керек',
    },
    {
      rule: 'required',
      errorMessage:
        lang === 'ru'
          ? 'Заполните, пожалуйста, данное поле'
          : 'Осы бапты толтырыңыз',
    },
    {
      rule: 'minLength',
      value: 15,
      errorMessage:
        lang === 'ru'
          ? 'IMEI должен состоять из 15 цифр'
          : 'IMEI нөмірі 15 саннан тұруы керек',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage:
        lang === 'ru'
          ? 'IMEI должен состоять из 15 цифр'
          : 'IMEI нөмірі 15 саннан тұруы керек',
    },
  ]);

  validateForm.addField(checkold, [
    {
      rule: 'required',
      errorMessage:
        lang === 'ru'
          ? 'Вы должны подтвердить согласие с правилами акции'
          : 'Науқан ережелерімен келісуіңіз керек',
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
      errorMessage:
        lang === 'ru'
          ? 'Заполните, пожалуйста, данное поле'
          : 'Осы бапты толтырыңыз',
    },
  ]);

  validateQuestion.addField(questionEmail, [
    {
      rule: 'required',
      errorMessage:
        lang === 'ru'
          ? 'Заполните, пожалуйста, данное поле'
          : 'Осы бапты толтырыңыз',
    },
    {
      rule: 'email',
      errorMessage:
        lang === 'ru'
          ? 'Введите корректный адрес электронной почты'
          : 'Өтінеміз қолданыстағы электронды пошта адресін енгізіңіз',
    },
  ]);

  validateQuestion.addField(message, [
    {
      rule: 'required',
      errorMessage:
        lang === 'ru'
          ? 'Заполните, пожалуйста, данное поле'
          : 'Осы бапты толтырыңыз',
    },
    {
      rule: 'maxLength',
      value: 100,
      errorMessage:
        lang === 'ru'
          ? 'Сообщение не должно превышать 100 символов'
          : 'Хабарлама мәтіні 100 таңбадан аспауы керек',
    },
  ]);

  validateQuestion.addField(checkoldQuestion, [
    {
      rule: 'required',
      errorMessage:
        lang === 'ru'
          ? 'Вы должны подтвердить согласие с правилами акции'
          : 'Науқан ережелерімен келісуіңіз керек',
    },
  ]);

  return {validateForm, validateQuestion};
  /* end */
};

export default validate;
