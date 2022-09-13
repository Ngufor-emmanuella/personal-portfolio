const ham = document.querySelector('.hambuger');
const links= document.querySelector('#navlinks');
const exit = document.querySelector('.markx');

ham.addEventListener('click', () => {
  ham.style.display='none';
  links.style.display='block';
  exit.style.display='block';
})

exit.addEventListener('click', () => {
  ham.style.display='block';
  links.style.display='none';
  exit.style.display='none';
})

links.addEventListener('click', () => {
  ham.style.display='block';
  links.style.display='none';
  exit.style.display='none';
})
