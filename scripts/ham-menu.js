const hamburger = document.querySelector('.ham-icon');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
nav.forEach((e) => {
  e.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});