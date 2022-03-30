"use strict";

//Parte 2.1 ejercicio 1
// const form = document.querySelector('.js-new-form');
// form.classList.remove("collapsed");

const catList = document.querySelector(".js-list");
const kittenImageOne = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenNameOne = "Anastacio";
const kittenDescOne =
  "(cariñoso) Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceOne = "British Shorthair";

const kittenImageTwo =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenNameTwo = "Fiona";
const kittenDescTwo =
  "(cariñoso) Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceTwo = "British Shorthair";

const kittenImageThree =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenNameThree = "Cielo";
const kittenDescThree =
  " (cariñoso) Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! cariñoso";
const kittenRaceThree = "British Shorthair";

const kittenOne = renderKitten(
  kittenImageOne,
  kittenDescOne,
  kittenNameOne,
  kittenRaceOne
);

const kittenTwo = renderKitten(
  kittenImageTwo,
  kittenDescTwo,
  kittenNameTwo,
  kittenRaceTwo
);

const kittenThree = renderKitten(
  kittenImageThree,
  kittenDescThree,
  kittenNameThree,
  kittenRaceThree
);
//Parte 2.2 ejercicio 1
// const kittenOne = `<li class="card"> <article><img
//     class="card_img"
//     src="${kittenImageOne}"
//     alt="gatito"
//   />
//   <h3 class="card_title"> ${kittenNameOne} </h3>
//   <h4 class="card_race">${kittenRaceOne}</h4>
//   <p class="card_description">
//   ${kittenDescOne}
//   </p>
// </article>
// </li>`;

// const kittenTwo = `<li class="card">
// <img class="card_img"
//   src="${kittenImageTwo}" />
// <h3 class="card_title">${kittenNameTwo}</h3>
// <h4 class="card_race">${kittenRaceTwo}</h4>
// <p class="card_description">
// ${kittenDescTwo}
// </p>
// </li>`;

// const kittenThree = `<li class="card">
// <img class="card_img"
//   src="${kittenImageThree}"
//   alt="gatito" />
// <h3 class="card_title">${kittenNameThree}</h3>
// <h4 class="card_race">${kittenRaceThree}</h4>
// <p class="card_description">
// ${kittenDescThree}
// </p>
// </li>`;

//catList.innerHTML = kittenOne + kittenTwo + kittenThree;

// Parte 2.3 ejercicio 1 Búsqueda por descripción
// const input_search_desc = document.querySelector(".js_in_search_desc");
// input_search_desc.value = "cariñoso";
// const descrSearchText = input_search_desc.value;

// if (kittenDescOne.includes(descrSearchText)) {
//   catList.innerHTML = kittenOne;
// }

// if (kittenDescTwo.includes(descrSearchText)) {
//   catList.innerHTML += kittenTwo;
// }

// if (kittenDescThree.includes(descrSearchText)) {
//   catList.innerHTML += kittenThree;
// }

// Parte 2.3 ejercicio 2 Mostrar/ocultar el formulario añadir
/* const formElement = document.querySelector(".js-new-form");
if (formElement.classList.contains("collapsed")) {
  formElement.classList.remove("collapsed");
} else {
  formElement.classList.add("collapsed");
} */

// Parte 2.4 ejercicio 1 Mostrar/ocultar formulario y 2 Validar formulario nuevo gatito

/* const clickButton = document.querySelector(".js_click");

clickButton.addEventListener("click", (event) => {
  formElement.classList.toggle("collapsed");
}); */

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMesageError = document.querySelector(".js-label-error");
const buttonAdd = document.querySelector(".js-btn-add");

// buttonAdd.addEventListener("click", (event) => {
//   event.preventDefault();
//   // alert("Has hecho click en el botón");
//   const valueDesc = inputDesc.value;
//   const valuePhoto = inputPhoto.value;
//   const valueName = inputName.value;

//   if (valueDesc === "" || valuePhoto === "" || valueName === "") {
//     labelMesageError.innerHTML = "Debes rellenar todos los campos";
//   } else {
//     labelMesageError.innerHTML = "";
//   }
// });

// Parte 2.4 ejercicio 3 Validar formulario búsqueda
/* 
const inputDescSearch = document.querySelector(".js_in_search_desc");

const btnSearch = document.querySelector(".js_search");
btnSearch.addEventListener("click", (event) => {
  const valueDescSearch = inputDescSearch.value;

  if (valueDescSearch === "") {
    ("No hay descripción para la búsqueda");
  } else {
    console.log("puede buscar");
  }
}); */

// Parte 2.4 ejercicio 4 Cancelar formulario
const buttonCancel = document.querySelector(".js-button-cancel");
const newFormElement = document.querySelector(".js-new-form");
const newFormInputPhoto = document.querySelector(".js-input-photo");
const newFormInputName = document.querySelector(".js-input-name");
const newFormInputRace = document.querySelector(".js-input-race");
const newForminputDesc = document.querySelector(".js-input-desc");

// btnCancel.addEventListener("click", (event) => {
//   event.preventDefault();
//   newFormElement.classList.toggle("collapsed");
//   newFormInputPhoto.value = "";
//   newFormInputName.value = "";
//   newFormInputRace.value = "";
//   newForminputDesc.value = "";
// });

//Parte 2.5 ejercicio 1 Mostrar/ocultar el formulario nuevo gatito
// const newFormElement = document.querySelector(".js-new-form");
const link = document.querySelector(".js_click");

function showNewCatForm() {
  newFormElement.classList.remove("collapsed");
}
function hideNewCatForm() {
  newFormElement.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  console.log("hola");
  if (newFormElement.classList.contains("collapsed")) {
    newFormElement.classList.remove("collapsed");
  } else {
    newFormElement.classList.add("collapsed");
  }
}

link.addEventListener("click", handleClickNewCatForm);

//Parte 2.5 ejercicio 2 Crear el gatito en HTML

/* function renderKitten(url, desc, name, race) {
  return `<li class="card"> 
    <article>
      <img class="card_img"src="${url}" alt="gatito"/>
      <h3 class="card_title"> ${name} </h3>
      <h4 class="card_race">${race}</h4>
      <p class="card_description">
        ${desc}
      </p>
    </article> 
  </li>`;
} */

//Parte 2.5 ejercicio 3 Adicionar nuevo gatito

//modifica el evento para cumplir una función manejadora
buttonAdd.addEventListener("click", addNewKitten);

function addNewKitten(event) {
  //mueve el código que está dentro del evento
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMesageError.innerHTML = "Debes rellenar todos los campos";
  } else {
    labelMesageError.innerHTML = "";
  }
}

//Parte 2.5 ejercicio 4 Cancelar nuevo gatito
buttonCancel.addEventListener("click", cancelNewKitten);

function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.toggle("collapsed");
  newFormInputPhoto.value = "";
  newFormInputName.value = "";
  newFormInputRace.value = "";
  newForminputDesc.value = "";
}

//Parte 2.5 ejercicio 5 Filtrar por descripción

const input_search_desc = document.querySelector(".js_in_search_desc");

const buttonSearch = document.querySelector(".js-button-search");
buttonSearch.addEventListener("click", filterKitten);

function filterKitten(event) {
  event.preventDefault();
  catList.innerHTML = "";
  const descrSearchText = input_search_desc.value;
  if (kittenDescOne.includes(descrSearchText)) {
    catList.innerHTML += kittenOne;
  }
  if (kittenDescTwo.includes(descrSearchText)) {
    catList.innerHTML += kittenTwo;
  }
  if (kittenDescThree.includes(descrSearchText)) {
    catList.innerHTML += kittenThree;
  }
}
//Parte 2.5 ejercicio 6 Mostrar la raza o no
/* 
const input_search_race = document.querySelector(".js_in_search_race");

function renderRace(event) {
  event.preventDefault();
  const raceSearchText = input_search_race.value;
  console.log("hola");
  if (kittenRaceOne.includes(raceSearchText)) {
    catList.innerHTML += kittenOne;
  }
  if (kittenRaceTwo.includes(raceSearchText)) {
    catList.innerHTML += kittenTwo;
  }
  if (kittenRaceThree.includes(raceSearchText)) {
    catList.innerHTML += kittenThree;
  }
} */
/* return `<h3 class="card"> 
<article>
  <img class="card_img"src="${url}" alt="gatito"/>
  <h3 class="card_title"> ${name} </h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
    ${desc}
  </p>
</article> 
</h3>`; */

//Parte 2.6 ejercicio 1 Convertir cada gatito en un objeto

const kittenData_1 = {
  image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  name: "Anastacio",
  desc: "Ruiseño, juguetón, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};
const kittenData_2 = {
  image:
    "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
  name: "Fiona",
  desc: "Ruiseño, juguetón, cariñoso le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};
const kittenData_3 = {
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
  name: "Cielo",
  desc: "Ruiseño, juguetón, cariñoso le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};

function renderKitten(kittenData) {
  return `<li class="card"> 
  <article>
    <img class="card_img"src="${url}" alt="gatito"/>
    <h3 class="card_title"> ${name} </h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
      ${desc}
    </p>
  </article> 
</li>`;
}
