"use strict";

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

// Parte 2.3
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

// Parte 2.3
/* const formElement = document.querySelector(".js-new-form");
if (formElement.classList.contains("collapsed")) {
  formElement.classList.remove("collapsed");
} else {
  formElement.classList.add("collapsed");
} */

// Parte 2.4 ejercicio 1 y 2

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

// Parte 2.4 ejercicio 3

const inputDescSearch = document.querySelector(".js_in_search_desc");

const btnSearch = document.querySelector(".js_search");
btnSearch.addEventListener("click", (event) => {
  const valueDescSearch = inputDescSearch.value;

  if (valueDescSearch === "") {
    alert("No hay descripción para la búsqueda");
  } else {
    console.log("puede buscar");
  }
});

// Parte 2.4 ejercicio 4
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

//Parte 2.5 ejercicio 1
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

//Parte 2.5 ejercicio 2

function renderKitten(url, desc, name, race) {
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
//linea 27 he cambiado el código //

//Parte 2.5 ejercicio 3

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

//Parte 2.5 ejercicio 4
buttonCancel.addEventListener("click", cancelNewKitten);

function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.toggle("collapsed");
  newFormInputPhoto.value = "";
  newFormInputName.value = "";
  newFormInputRace.value = "";
  newForminputDesc.value = "";
}

//Parte 2.5 ejercicio 5

const input_search_desc = document.querySelector(".js_in_search_desc");

const buttonSearch = document.querySelector(".js-button-search");
buttonSearch.addEventListener("click", filterKitten);

function filterKitten(event) {
  event.preventDefault();
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