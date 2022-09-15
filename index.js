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

// start of cards
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
                    <button type="button" name="See-Project">${pen.button}</button>
            </div>`;
            carttt.innerHTML += first;
});

// start of desktop carts
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
  imageC: "Resources/Images/Mask-Group2.png",
  altC: "art painting",
  headingC: "Website Protfolio",
  paragraphC: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  languageC: ['Html', 'Bootstrap', 'Ruby'],
  buttonC: "See Project"
},

{
  imageD: "Resources/Images/imageplace4.png",
  altD:"image picture",
  headingD: "Profesional Art",
  subHeadingD: "Printing Data More",
  paragraphD: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  languageD: ['Html', 'Bootstrap', 'Ruby'],
  buttonD: "See Project"
},

{
  imageB: "Resources/Images/ImgPlaceholder(9).png",
  altB: "printing pic",
  headingB: "Data Dashboard Healthcare",
  paragraphB: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  languageB: ['Html', 'Bootstrap', 'Ruby'],
  buttonB: "See Project"
},

{
  imageC: "Resources/Images/Mask-Group2.png",
  altC: "art painting",
  headingC: "Website Protfolio",
  paragraphC: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  languageC: ['Html', 'Bootstrap', 'Ruby'],
  buttonC: "See Project"
}
];
books.forEach((book) => {
  const second = `<div class="cartbox" id="c1">
  <img class="proj1" src=${book.image} ${book.alt}/>
      <button class="firstbut" type="button" name="See-Project">${book.button}</button>
</div>`
cartt2.innerHTML += second;
})

books.forEach((book) => {
  const third = `<div class="cart c2">
  <img class="projbg" src=${book.image} ${book.alt}/>
   <h2 class="soft">${book.heading}</h2>
  <p class="two">${book.heading}</p>
  <ul>
       <li class="engine">${book.language[0]}</li>
      <li class="engine">${book.language[1]}</li>
      <li class="engine">${book.language[2]}</li>
  </ul>
  <button class="thirdbut" type="button" name="See-Project">${book.button}</button>
</div>`
cartt2.innerHTML += third;
})

books.forEach((book) => {
  const fourth = ` <div class="cart c3">
  <img class="projbg1" src=${book.imageC} ${book.altC}/>
  <h2 class="web"> ${book.headingC} </h2>
  <p class="website">${book.paragraphC}</p>
  <ul class="website2">
      <li class="engine ">${book.languageC[0]}</li>
      <li class="engine">${book.languageC[1]}</li>
      <li class="engine">${book.languageC[2]}</li>
  </ul>
  <button class="secondbut" type="button" name="See-Project">${book.buttonC}</button>
</div>`
cartt2.innerHTML += fourth;
})

books.forEach((book) => {
  const fifth = `<div class="cart" id="c4">
  <img class="projone" src=${book.imageD} ${book.altD}/>
  <h2 class="software">${book.headingD} <span>${book.subHeadingD}</span></h2>
  <p class="sogood">${book.paragraphD}</p>
  <ul class="under">
      <li class="engine">${book.languageD[0]}</li>
      <li class="engine">${book.languageD[1]}</li>
      <li class="engine">${book.languageD[2]}</li>
  </ul>
  <button class="fourthbut" type="button" name="See-Project">${book.buttonD}</button>
</div>`
cartt2.innerHTML += fifth;
})









