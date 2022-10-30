// Creating variables
const menuBtn = document.querySelector('.header__navbar-menu');
const closeBtn = document.querySelector('.header__navbar-close');
const mobileMenu = document.querySelector('.header__navlinks');

// Adding event listener to menu button
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('close');
});

// Adding event listener to close button
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('close');
});

console.log(window.innerWidth);
