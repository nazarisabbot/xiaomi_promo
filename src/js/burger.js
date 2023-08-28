const burger = (btn, bodyBurger) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('burger__btn_active');
    bodyBurger.classList.toggle('burger__body_active');
  });
};

export default burger;
