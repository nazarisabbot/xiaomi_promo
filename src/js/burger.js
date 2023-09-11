const burger = (btn, menu) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
  });
};

export default burger;
