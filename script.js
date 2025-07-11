document.addEventListener('DOMContentLoaded', () => {
  // Modal Logic
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

  // Expose modal functions globally
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Slideshow Logic
  const backgrounds = [
    'images/eve.mp4', // ✅ Add video here
    'images/eve.mp4', // ✅ Add video here
    'images/WhatsApp Image 2025-06-14 at 18.37.57.jpeg',
    'images/kise10.jpg',
    'images/kise12.jpg',
    'images/kise13.jpg',
    'images/kise14.jpg',
    'images/1F1A (271) (1).jpg',
    'images/1F1A (350) (1).jpg',
    'images/1F1A (350).jpg',
    'images/1F1A (271) (1).jpg',
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
    'images/IMG-20241229-WA0285.jpg',
    'images/eve.mp4' // ✅ Add video here
  ];

  const effects = ['fade', 'slide-left', 'slide-right', 'zoom-in', 'zoom-out'];
  const timing = 8000; // 8 seconds for images
  let current = 0;
  let active = true;

  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');

  if (!bg1 || !bg2) return;

  // Detect video file
  function isVideo(src) {
    return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
  }

  // Random effect logic with no repeat
  let lastEffect = '';
  function getRandomEffect() {
    let effect;
    do {
      effect = effects[Math.floor(Math.random() * effects.length)];
    } while (effect === lastEffect);
    lastEffect = effect;
    return effect;
  }

  // Preload all media
  function preload() {
    backgrounds.forEach(src => {
      if (isVideo(src)) {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
      } else {
        const img = new Image();
        img.src = src;
      }
    });
  }

  preload();

  function changeBackground() {
    const nextIndex = (current + 1) % backgrounds.length;
    const effect = getRandomEffect();

    const currentBg = active ? bg1 : bg2;
    const nextBg = active ? bg2 : bg1;

    // Reset background content
    nextBg.innerHTML = '';
    nextBg.style.backgroundImage = '';
    nextBg.className = `background-slideshow ${effect} active`;

    const src = backgrounds[nextIndex];

    if (isVideo(src)) {
      const video = document.createElement('video');
      video.src = src;
      video.autoplay = true;
      video.muted = true;
      video.loop = false;
      video.playsInline = true;
      video.classList.add('video-bg');
      nextBg.appendChild(video);

      video.onended = () => {
        current = nextIndex;
        active = !active;
        setTimeout(changeBackground, 1000); // slight pause after video ends
      };
    } else {
      nextBg.style.backgroundImage = `url('${src}')`;
      setTimeout(() => {
        current = nextIndex;
        active = !active;
        changeBackground();
      }, timing);
    }

    currentBg.className = `background-slideshow ${effect}`;
    currentBg.innerHTML = ''; // clear any video from previous layer
    currentBg.style.backgroundImage = '';
  }

  changeBackground();
});