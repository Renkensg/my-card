const frontTextHover = document.querySelector('.front__text-hover');
const outerDiv = document.querySelector('.outer-div');
const innerDiv = document.querySelector('.inner-div');

// Verifica se o dispositivo é móvel
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Adiciona o texto e o listener de evento de acordo com o tipo de dispositivo
if (isMobile) {
  frontTextHover.textContent = 'Toque para me encontrar';
}

outerDiv.addEventListener('mouseover', function() {
  innerDiv.classList.add('rotate');
});

outerDiv.addEventListener('touch', function() {
  innerDiv.classList.add('rotate');
});

outerDiv.addEventListener('blur', function() {
  innerDiv.classList.remove('rotate');
});

outerDiv.addEventListener('mouseout', function() {
  innerDiv.classList.remove('rotate');
});
