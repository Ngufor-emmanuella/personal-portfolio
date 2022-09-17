import data from './projectData.js';

const menuBtn = document.getElementById('menu-button');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('nav-items');
const projectContainer = document.getElementById('portfolio');
const popup = document.getElementById('popup');

menuBtn.addEventListener('click', () => {
  menu.classList.add('menu-shown');
  closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menu.classList.remove('menu-shown');
});

menu.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menu.classList.remove('menu-shown');
});

data.forEach((data) => {
  const {
    title, description, lang,
  } = data;

  const project = document.createElement('div');
  project.innerHTML += `
  <div class="card-project scale-effect">
    <h1 class="title">${title}</h1>
    <p class="description">
      ${description}
    </p>
    <ul class="tags">
      ${lang.map((lang) => `<li class="tag">${lang}</li>`).join('')}
    </ul>
    <button class="btn-sp" type="button"> See Projects</button>
    </div>`;
  projectContainer.appendChild(project);

  const projectBtn = project.querySelector('.btn-sp');
  projectBtn.addEventListener('click', () => {
    const popWindow = document.createElement('div');
    popup.style.display = 'flex';
    popWindow.innerHTML += `
  <div class="popup-container">
      <!-- popup header -->
      <div class="popup-header">
            <div class="popup-title">
                <h1 class="popup-title">${title}</h1>
                <button class="close-popup-btn" type="button"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <ul class="tags">
                ${lang.map((tech) => `<li class="li">${tech}</li>`).join('')}
            </ul>
      </div>
          
      <!-- popup body -->
      <div class="popup-body">
            <img src="${data.src}" alt="Snapshoot">
      </div>

      <!-- popup footer -->
      <div class="popup-footer">
          <p>${data.description}</p>
          <div>
              <a href="${data.live}" target="_blank" class="popup-button"><button  type="button">See Live<img  src="/img/see-live.png" alt="see live icon"></button></a>
              <a href="${data.source}" target="_blank" class="popup-button"><button  type="button">Source<img src="/img/Icon-GitHub.png" alt="github icon>"></button></a>
          </div>
      </div>
      </div>
</div> `;
    popup.appendChild(popWindow);
    const closePopupBtn = document.querySelector('.close-popup-btn');
    closePopupBtn.addEventListener('click', () => {
      popup.removeChild(popWindow);
      popup.style.display = 'none';
    });
  });
});

const form = document.querySelector('#form');
const messageContainer = document.querySelector('.message');

const isValidEmail = (email) => {
  const eamilPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return eamilPattern.test(email);
};

form.addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
  const valid = isValidEmail(formData.get('email'));
  if (valid) {
    const message = document.createElement('span');
    message.classList.add('success');
    message.innerHTML = 'Data sent successfully!';
    messageContainer.replaceChildren(message);
  } else {
    e.preventDefault();
    const message = document.createElement('span');
    message.classList.add('error');
    message.innerHTML = 'Incorrect format. Enter email in lowercase';
    messageContainer.replaceChildren(message);
  }
});

// Mobile form Local Storage
const name = form.elements.item(0);
const email = form.elements.item(1);
const comment = form.elements.item(2);
function saveData() {
  const data = {
    Name: form.elements.item(0).value,
    Email: form.elements.item(1).value,
    Comment: form.elements.item(2).value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

let formObject = JSON.parse(localStorage.getItem('data'));
if (!formObject) {
  formObject = {
    name: '',
    email: '',
    comment: '',
  };
  saveData();
}

name.value = formObject.name;
name.addEventListener('change', (e) => {
  formObject.name = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

email.value = formObject.email;
email.addEventListener('change', (e) => {
  formObject.email = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

comment.value = formObject.comment;
comment.addEventListener('change', (e) => {
  formObject.comment = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});
