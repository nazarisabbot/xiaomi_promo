const softScroll = (elements) => {
  const point = elements;

  point.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href = link.getAttribute('href');

      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};

export default softScroll;
