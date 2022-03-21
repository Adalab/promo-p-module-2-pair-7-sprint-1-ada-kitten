"use strict";

const form = document.querySelector('.js-new-form');

form.classList.remove("collapsed");

const catList = document.querySelector(".js-list");
const kittenImageOne = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenNameOne = "Anastacio";
const kittenDescOne =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceOne = "British Shorthair";

const kittenImageTwo = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenNameTwo = "Fiona";
const kittenDescTwo =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceTwo = "British Shorthair";

const kittenImageThree = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenNameThree = "Cielo";
const kittenDescThree =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceThree = "British Shorthair";

 
const kittenOne = `<li class="card"> <article><img
    class="card_img"
    src="${kittenImageOne}"
    alt="gatito"
  />
  <h3 class="card_title"> ${kittenNameOne} </h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description">
  ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img class="card_img"
  src="${kittenImageTwo}" />
<h3 class="card_title">${kittenNameTwo}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description">
${kittenDescTwo}
</p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img"
  src="${kittenImageThree}"
  alt="gatito" />
<h3 class="card_title">${kittenNameThree}</h3>
<h4 class="card_race">${kittenRaceThree}</h4>
<p class="card_description">
${kittenDescThree}
</p>
</li>`;

catList.innerHTML = kittenOne + kittenTwo + kittenThree;



