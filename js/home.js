// Creating variables
const speakers = Array.from(document.querySelectorAll('.speaker__card'));
const moreBtn = document.querySelector('.speakers__btn');

// add event listener to the more button
moreBtn.addEventListener('click', () => {
  speakers.forEach((speaker, index) => {
    if (index > 0 && index !== 2) {
      speaker.classList.toggle('close');
    }
  });

  moreBtn.classList.add('close');
});
