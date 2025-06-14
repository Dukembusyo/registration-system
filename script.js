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
  'images/1F1A8072.jpg',
  'images/IMG_5679.jpg',
  'images/kise1.jpg',
  'images/kise2.jpg',
  'images/kise4.jpg',
  'images/kise5.jpg',
  'images/kise9.jpg',
  'images/IMG-20240815-WA0031.jpg',
  'images/kise7.jpg',
    'images/IMG-20241229-WA0285.jpg'
];

const effects = ['fade', 'slide-left', 'slide-right', 'zoom-in', 'zoom-out'];

let index = 0;
const bgSlideshow = document.getElementById('bg-slideshow');

function changeBackground() {
  // Remove previous transition class
  bgSlideshow.className = 'background-slideshow';

  // Set new image
  bgSlideshow.style.backgroundImage = `url('${backgrounds[index]}')`;

  // Randomly choose a transition effect
  const effect = effects[Math.floor(Math.random() * effects.length)];
  bgSlideshow.classList.add('bg-transition', effect);

  // Update index
  index = (index + 1) % backgrounds.length;
}

// Initial load
changeBackground();

// Change every 6 seconds
setInterval(changeBackground, 6000);