function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'flex';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

window.addEventListener('click', function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});







const backgrounds = [
  'images/kise10.jpg',
  'images/kise12.jpg',
  'images/kise13.jpg',
  'images/kise14.jpg',
  'images/1F1A8072.jpg',
  'images/IMG_5679.jpg',
  'images/kise1.jpg',
  'images/kise2.jpg',
  'images/kise4.jpg',
  'images/kise5.jpg',
  'images/kise9.jpg',
  'images/kise16.jpg',
    'images/IMG_ (201).jpg',
  'images/IMG-20240401-WA0410(1).jpg',

  
  'images/IMG-20240815-WA0031.jpg',
  'images/kise7.jpg',
    'images/IMG-20241229-WA0285.jpg'
];

const effects = ['fade', 'slide-left', 'slide-right', 'zoom-in', 'zoom-out'];
const timing = 8000; // consistent 8 seconds

let current = 0;
let active = true;

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

// Preload all images
backgrounds.forEach((src) => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  const nextIndex = (current + 1) % backgrounds.length;
  const effect = effects[Math.floor(Math.random() * effects.length)];

  const currentBg = active ? bg1 : bg2;
  const nextBg = active ? bg2 : bg1;

  nextBg.style.backgroundImage = `url('${backgrounds[nextIndex]}')`;

  // reset classes
  currentBg.className = `background-slideshow ${effect}`;
  nextBg.className = `background-slideshow ${effect} active`;

  active = !active;
  current = nextIndex;

  setTimeout(changeBackground, timing);
}

changeBackground();