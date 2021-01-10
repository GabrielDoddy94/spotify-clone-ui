const btnBurger = document.querySelector('.js-header__burger');
const navMobile = document.querySelector('.mobile');
const backdrop = document.querySelector('.backdrop');

const mobileOpenHandler = function () {
  this.classList.toggle('open');
  backdrop.classList.toggle('hidden');
  navMobile.classList.toggle('hidden');
};

btnBurger.addEventListener('click', mobileOpenHandler);
