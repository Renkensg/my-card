const card = document.querySelector('.card');
const frontTextHover = document.querySelector('.front__text-hover');

// Verifica se o dispositivo é móvel
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Adiciona o texto e o listener de evento de acordo com o tipo de dispositivo
if (isMobile) {
  card.addEventListener('click', function () {
    this.classList.toggle('is-flipped');
  });
  frontTextHover.textContent = 'Toque para me encontrar';
} else {
  card.addEventListener('mouseenter', function () {
    this.classList.add('is-flipped');
  });
  card.addEventListener('mouseleave', function () {
    this.classList.remove('is-flipped');
  });
}
