// Creating variables
const moreBtn = document.querySelector('.speakers__btn');
const speakerContainer = document.querySelector('.speaker__cards');
const screenSize = window.innerWidth;

// Create speakers data array
const speakers = [
  {
    id: 1,
    status: 'shown',
    image: 'img/speaker_01.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    status: 'hidden',
    image: 'img/speaker_02.png',
    name: 'Kilnam Chon',
    title: '',
    desc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 3,
    status: 'shown',
    image: 'img/speaker_03.png',
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    desc: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 4,
    status: 'hidden',
    image: 'img/speaker_04.png',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    desc: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 5,
    status: 'hidden',
    image: 'img/speaker_05.png',
    name: 'Lila tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    desc: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    id: 6,
    status: 'hidden',
    image: 'img/speaker_06.png',
    name: 'Ryan Merkley',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    desc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

speakers.forEach((speaker) => {
  if (screenSize < 768) {
    if (speaker.status !== 'hidden') {
      speakerContainer.innerHTML += `<div class="speaker__card">
    <img src = ${speaker.image} alt = "speaker ${speaker.id}" class="speaker__card-img">
      <div class="speaker__card-details">
        <h4 class="speaker__card-name">${speaker.name}</h4>
        <p class="speaker__card-title">${speaker.title}</p>
        <hr>
          <p class="speaker__card-desc">${speaker.desc}</p>
      </div>`;
    }
  } else {
    speakerContainer.innerHTML += `<div class="speaker__card">
    <img src = ${speaker.image} alt = "speaker ${speaker.id}" class="speaker__card-img">
      <div class="speaker__card-details">
        <h4 class="speaker__card-name">${speaker.name}</h4>
        <p class="speaker__card-title">${speaker.title}</p>
        <hr>
          <p class="speaker__card-desc">${speaker.desc}</p>
      </div>`;
  }
});

// add event listener to the more button
moreBtn.addEventListener('click', () => {
  speakers.forEach((speaker) => {
    if (speaker.status === 'hidden') {
      speakerContainer.innerHTML += `<div class="speaker__card">
    <img src = ${speaker.image} alt = "speaker ${speaker.id}" class="speaker__card-img">
      <div class="speaker__card-details">
        <h4 class="speaker__card-name">${speaker.name}</h4>
        <p class="speaker__card-title">${speaker.title}</p>
        <hr>
          <p class="speaker__card-desc">${speaker.desc}</p>
      </div>`;
    }
  });

  moreBtn.classList.add('close');
});
