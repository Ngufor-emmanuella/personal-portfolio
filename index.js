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
                    <button id="press" type="button" name="See-Project">${pen.button}</button>
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

    <button id="press" class="firstbut" type="button" name="See-Project">${books[0].button}</button>
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
<button id="press" class="thirdbut" type="button" name="See-Project">${books[1].button}</button>
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
<button id="press" class="secondbut" type="button" name="See-Project">${books[2].button}</button>
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
<button id="press" class="fourthbut" type="button" name="See-Project">${books[3].button}</button>
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
<button id="press" class="thirdbut" type="button" name="See-Project">${books[4].button}</button>
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
<button id="press" class="fifthbut" type="button" name="See-Project">${books[5].button}</button>
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
  // description: "A daily selection of privately personalized reads; no accounts or sign-ups required,
  // has been the industry's standard I can help you build a product , feature or website Look through some
  // of my work and experience! If you like what you see and have a project you need coded, don't hestiate to contact me.",
  buttonA: "See Live ",
  buttonAImg: "Resources/Images/searchbutt.png",
  buttonAAlt: "search button",
  buttonB: "See Source ",
  buttonBImg: "Resources/Images/whiteangelist.png",
  buttonBAlt: "github icon"
}];

let pop = document.querySelector('.popup');
pop.innerHTML = `<div class="popup-first">
<h2 class="popupa">${ruler[0].headingFirst}</h2>
<h2 class="popups">${ruler[0].headingSecond}</h2>
<img class="cancel" src="${ruler[0].firstImage}" alt="${ruler[0].firstAlt}"></li>
</div>
<ul>
<li>${ruler[0].firstList[0]}</li>
<li>${ruler[0].firstList[1]}</li>
<li>${ruler[0].firstList[2]}</li>
</ul>
<div class="popup-sec">
<img src="${ruler[0].secondImage}" alt="${ruler[0].secondAlt}">
<p>${ruler.description}</p>
</div>
<div class="popup-third">
<button>${ruler[0].buttonA}<img src="${ruler[0].buttonAImg}"alt="${ruler[0].buttonAAlt}"></button>
<button>${ruler[0].buttonB} <img src="${ruler[0].buttonBImg}" alt="${ruler[0].buttonBAlt}"></button>
</div>`;
