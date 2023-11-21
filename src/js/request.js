const request = async (api, body, form) => {
  try {
    const response = await fetch(`http://xiaomipromo.kz:81/api/${api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      console.log('Данные успешно отправлены');
      form.reset();
      return 'ok';
    } else {
      console.error('Ошибка при отправке данных:', response.statusText);
      return;
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
    return '!ok';
  }
};

export default request;
