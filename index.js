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
//start of validate form
const form = document.getElementById('f1');
const fname = document.getElementById('text1');
const email = document.getElementById('email1');
const message = document.getElementById('text_zone1');
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorMsg = document.getElementById('errorMsg');

const overralError = document.getElementById('overralError');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

fname.addEventListener('input', () => {
  if (fname.value.length < 30) {
    errorName.textContent = '';
  } else {
    errorName.textContent = 'Name should be less than 30 characters.';
  }
});

email.addEventListener('input', () => {
  if (email.value === email.value.toLowerCase()) {
    errorEmail.textContent = '';
  } else {
    errorEmail.textContent = 'Email Address should not have uppercase letters.';
  }

  if (!emailRegex.test(email.value)) {
    errorEmail.textContent = 'Invalid Email Address';
  }
});

message.addEventListener('input', () => {
  if (message.value.length < 10) {
    errorMsg.textContent = 'Message should have more 10 characters.';
  } else {
    errorMsg.textContent = '';
  }

  if (message.value.length > 400) {
    errorMsg.textContent = 'Message should not exceed 400 characters.';
  }
});

form.addEventListener('submit', (event) => {
  if (
    fname.value.length > 3
      && fname.value.length < 30
      && message.value.length > 10
      && message.value.length < 400
      && emailRegex.test(email.value)
      && email.value === email.value.toLowerCase()
  ) {
    form.submit();
  } else if (fname.value === '' && email.value === '' && message.value === '') {
    overralError.textContent = 'Please fill in entire form before submitting.';
    document.getElementById('field-overal').setAttribute('class', 'error');
    event.preventDefault();
  } else {
    overralError.textContent = '';
    overralError.style.display = 'none';
    event.preventDefault();
  }
});