const frontTextHover = document.querySelector('.front__text-hover');
// Verifica se o dispositivo é um touchscreen
const isTouchscreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// Verifica se o dispositivo é móvel
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Adiciona o texto e o listener de evento de acordo com o tipo de dispositivo
if (isMobile) {
  frontTextHover.textContent = 'Toque para me encontrar';
}

// Adiciona um evento de clique ou toque ao card dependendo do dispositivo
const card = document.querySelector('.inner-div');
if (isTouchscreen) {
  card.addEventListener('touchstart', function() {
    card.classList.toggle('is-flipped');
  });
} else {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
}
