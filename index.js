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

//start of cards
const carttt = document.querySelector('.carttt');
const pens = [{
 heading: "Professional Art ",
 subHeading: "Printing Data",
 paragragh: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 heading: "Professional Art ",
 subHeading: "Printing Data",
 paragragh: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 heading: "Professional Art ",
 subHeading: "Printing Data",
 paragragh: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 heading: "Professional Art ",
 subHeading: "Printing Data",
 paragragh: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 heading: "Professional Art ",
 subHeading: "Printing Data",
 paragragh: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 heading: "Professional Art ",
 subHeading: "Printing Data",
 paragragh: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},
];
pens.forEach((pen) => {
 const first = `
 <div class="cart" id="cf1">
 <h2>${pen.heading}<span>${pen.subHeading}</span></h2>
 <p>${pen.paragragh}</p>
 <ul>
 <li>${pen.language[0]}</li>
 <li>${pen.language[1]}</li>
 <li>${pen.language[2]}</li>
 </ul>
 <button id="press" type="button" class="click" name="See-Project">${pen.button}</button>
 </div>`;
 carttt.innerHTML += first;
});

//start of desktop carts
const cartt2 = document.querySelector('.cartt2');
const books = [{
 image: "Resources/Images/Mask-Group.png",
 alt: "printing pic",
 button: "See-Project"
},

{
 image: "Resources/Images/ImgPlaceholder(9).png",
 alt:"printing pic", //single background and card
 heading: "Data Dashboard <br> Healthcare",
 paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 image: "Resources/Images/Mask-Group2.png",
 alt: "art painting",
 heading: "Website Protfolio",
 paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 image: "Resources/Images/imageplace4.png",
 alt:"image picture",
 heading: "Profesional Art",
 subHeading: "Printing Data More",
 paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 image: "Resources/Images/ImgPlaceholder(9).png",
 alt: "printing pic",
 heading: "Data Dashboard Healthcare",
 paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
},

{
 image: "Resources/Images/Mask-Group2.png",
 alt: "art painting",
 heading: "Website Protfolio",
 paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
 language: ['Html', 'Bootstrap', 'Ruby'],
 button: "See Project"
}
];

let cards = document.querySelector('.cartt2');
cards.innerHTML = `<div class="cartbox" id="c1">
<img class="proj1" src="${books[0].image}" alt="${books[0].alt}"/>

 <button id="press" class="firstbut click" type="button" name="See-Project">${books[0].button}</button>
</div>

<div class="cart c2">
<img class="projbg" src="${books[1].image}" alt="${books[1].alt}"/>

 <h2 class="soft">${books[1].heading}</h2>
<p class="two">${books[1].paragraph}</p>
<ul> 
 <li class="engine">${books[1].language[0]}</li>
 <li class="engine">${books[1].language[1]}</li>
 <li class="engine">${books[1].language[2]}</li>
</ul>
<button id="press" class="thirdbut click" type="button" name="See-Project">${books[1].button}</button>
</div>

<div class="cart c3">
<img class="projbg1" src="${books[2].image}" alt="${books[2].alt}"/>
<h2 class="web">${books[2].heading} </h2>
<p class="website">${books[2].paragraph}</p>
<ul class="website2">
 <li class="engine ">${books[2].language[0]}</li>
 <li class="engine">${books[2].language[1]}</li>
 <li class="engine">${books[2].language[2]}</li>
</ul>
<button id="press" class="secondbut click" type="button" name="See-Project">${books[2].button}</button>
</div>

<div class="cart" id="c4">
<img class="projone" src="${books[3].image}" alt="${books[3].alt}"/>
<h2 class="software">${books[3].heading} ${books[3].subHeading}</h2>
<p class="sogood">${books[3].paragraph}</p>
<ul class="under">
 <li class="engine">${books[3].language[0]}</li>
 <li class="engine">${books[3].language[1]}</li>
 <li class="engine">${books[3].language[1]}</li>
</ul>
<button id="press" class="fourthbut click" type="button" name="See-Project">${books[3].button}</button>
</div>

<div class="cart c2">
<img class="projbg" src="${books[4].image}" alt="${books[4].alt}"/>
<h2 class="soft">${books[4].heading}</h2>
<p class="two">${books[4].paragraph}</p>
<ul>
 <li class="engine">${books[4].language[0]}</li>
 <li class="engine">${books[4].language[1]}</li>
 <li class="engine">${books[4].language[2]}</li>
</ul>
<button id="press" class="thirdbut click" type="button" name="See-Project">${books[4].button}</button>
</div>

<div class="cart c3">
<img class="projbg" src="${books[5].image}" alt="${books[5].alt}"/>
<h2 class="web">${books[5].heading}</h2>
<p class="website">${books[5].paragraph}</p>
<ul class="website2">
 <li class="engine">${books[5].language[0]}</li>
 <li class="engine">${books[5].language[1]}</li>
 <li class="engine">${books[5].language[2]}</li>
</ul>
<button id="press" class="fifthbut click" type="button" name="See-Project">${books[5].button}</button>
</div> `;

//start of popup desktop
const popup = document.querySelector('.popup');
const ruler= [{
 headingFirst: "Multi Post Stories",
 headingSecond: "Keeping track of hundreds of components website",
 firstImage: "Resources/Images/markx.png",
 firstAlt: "cancel icon",
 firstList: ['Html', 'Bootstrap', 'Ruby on rails'],
 secondImage: "Resources/Images/picturehambuger.png",
 secondAlt: "tenth anniversary pic",
 description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard I .",
 buttonA: "See Live ",
 buttonAImg: "Resources/Images/searchbutt.png",
 buttonAAlt: "search button",
 buttonB: "See Source ",
 buttonBImg: "Resources/Images/whiteangelist.png",
 buttonBAlt: "github icon"
}];

let pop = document.querySelector('.popup');
pop.innerHTML = `
<div class=container-popup>
<div class=element-popup>
<div class="popup-first">
<h2 class="popupa">${ruler[0].headingFirst}</h2>
<h2 class="popups">${ruler[0].headingSecond}</h2>
<img class="cancel" src="${ruler[0].firstImage}" alt="${ruler[0].firstAlt}"></li>
</div>
<ul class="popup-tech">
<li>${ruler[0].firstList[0]}</li>
<li>${ruler[0].firstList[1]}</li>
<li>${ruler[0].firstList[2]}</li>
</ul>
<div class="popup-sec">
<img src="${ruler[0].secondImage}" alt="${ruler[0].secondAlt}">

<div class="description">
<p>${ruler[0].description}</p>

<div class="popup-third">
<button>${ruler[0].buttonA}<img class="image-button" src="${ruler[0].buttonAImg}"alt="${ruler[0].buttonAAlt}"></button>
<button>${ruler[0].buttonB} <img class="image-button" src="${ruler[0].buttonBImg}" alt="${ruler[0].buttonBAlt}"></button>
</div>
</div>
</div>
</div>
</div>
`;

//codes to display the popup
const press = document.querySelectorAll('.click');
const show = document.querySelector('.popup');
const cancel = document.querySelector('.cancel');

//add event to open popup
press.forEach((button) => {
 button.addEventListener('click', () => {
 button.style.display= 'none';
 show.style.display= 'block';
 cancel.style.display= 'block';
 })
})

//add event to close popup
cancel.addEventListener('click', () => {
 cancel.style.display= 'none';
 show.style.display= 'none';
//  press.style.display= 'block';
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