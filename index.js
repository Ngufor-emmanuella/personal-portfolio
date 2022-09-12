const image = document.querySelector('.hambuger');
const secondIcon = document.querySelector('.popup');

image.addEventListener('click', () => {
  image.classList.add('.popoff');
  secondIcon.classList.remove('.popoff');
  document.querySelector('#headline').classList.add('blur');
  document.querySelector('.logo-item').classList.add('blur');
});

const markx = document.querySelector('.markx');
markx.addEventListener('click', () => {
  secondIcon.classList.add('.popoff');
  image.classList.remove('.popoff');
  document.querySelector('#headline').classList.remove('blur');
  document.querySelector('.logo-item').classList.remove('blur');
});

