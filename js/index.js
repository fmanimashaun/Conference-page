// Creating variables

const menuBtn = document.querySelector('.header__navbar-menu');
const closeBtn = document.querySelector('.header__navbar-close');
const mobileMenu = document.querySelector('.header__navlinks');
const speakers = Array.from(document.querySelectorAll('.speaker__card'));
const moreBtn = document.querySelector('.speakers__btn');


// Adding event listener to menu button
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('close');
});

// Adding event listener to close button
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('close');
});

// add event listener to the more button
moreBtn.addEventListener('click', () => {
  speakers.forEach((speaker, index) => {
    if (index > 0 && index !== 2) {
      speaker.classList.toggle('close');
    }
  });

  moreBtn.classList.add('close');
});


