// Creating variables
const menuBtn = document.querySelector('.header__navbar-menu');
const closeBtn = document.querySelector('.header__navbar-close');
const mobileMenu = document.querySelector('.header__navlinks');
const speakerContainer = document.querySelector('.speaker__cards');

const speakers = [
  {
    id: 1,
    status: 'shown',
    image: 'img/speaker_01.png',
    name: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    status: 'shown',
    image: 'img/speaker_01.png',
    name: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    status: 'shown',
    image: 'img/speaker_01.png',
    name: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    status: 'shown',
    image: 'img/speaker_01.png',
    name: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    status: 'shown',
    image: 'img/speaker_01.png',
    name: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    status: 'shown',
    image: 'img/speaker_01.png',
    name: '',
    title: '',
    desc: '',
  },
];

// Adding event listener to menu button
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('close');
});

// Adding event listener to close button
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('close');
});
