const frontTextHover = document.querySelector('.front__text-hover');

// Verifica se o dispositivo é móvel
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Adiciona o texto e o listener de evento de acordo com o tipo de dispositivo
if (isMobile) {
  frontTextHover.textContent = 'Toque para me encontrar';
}
