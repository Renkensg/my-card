const frontTextHover = document.querySelector('.front__text-hover');
const outerDiv = document.querySelector('.outer-div');
const innerDiv = document.querySelector('.inner-div');

// Verifica se o dispositivo é móvel
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Adiciona o texto e o listener de evento de acordo com o tipo de dispositivo
if (isMobile) {
  frontTextHover.textContent = 'Toque para me encontrar';
}

function rotateInnerDiv() {
  innerDiv.style.transform = 'rotateY(180deg)';
}

function restoreInnerDiv() {
  innerDiv.style.transform = 'none';
}

outerDiv.addEventListener('mouseenter', rotateInnerDiv);
outerDiv.addEventListener('mouseleave', restoreInnerDiv);
outerDiv.addEventListener('click', function() {
  if (innerDiv.style.transform === 'rotateY(180deg)') {
    restoreInnerDiv();
  } else {
    rotateInnerDiv();
  }
});
