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

const carttt = document.querySelector('.carttt');
const pens = [{
  heading: "Profesional Art",
  subHeading: "Printing Data",
  paragragh: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  

}

]
pens.forEach((pen) => {
  const first = `
  <div class="cart" id="cf1">
                <h2>${pen.heading}<span>${pen.subHeading}</span></h2>
                    
                    <ul>
                        <li>Html</li>
                        <li>Bootstrap</li>
                        <li>Ruby</li>
                    </ul>
                    <button type="button" name="See-Project">See Project</button>
            </div>`;
            carttt.innerHtml += first;
});









