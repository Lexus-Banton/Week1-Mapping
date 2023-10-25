document.querySelector("#btnMap").addEventListener("click", () => {
  let countries = new Map();
  let countryList = document.querySelector("country-list");
  let txtAdd = document.querySelector("#txtAdd");

  countries.set(1, "France");
  countries.set(2, "Germany");
  countries.set(3, "Japan");
  countries.set(4, "South Korea");

  console.log(countries.get(2));
});

/* Imports */
// import { renderList } from "./render.js";
// //import { getLists } from "./fetch-utils.js";
// /* Get DOM Elements */
// const addListForm = document.getElementById("add-list-form");
// const removeButton = document.getElementById("remove-button");
// const errorDisplay = document.getElementById("error-display");
// const countryList = document.getElementById("country-list");

// /* State */
// let lists = [];
// let error = null;

// /* Events */
// /*window.addEventListener("load", async () => {
//   const response = await getLists();
//   error = response.error;
//   lists = response.data;

//   if (error) {
//     displayError();
//   }
//   if (lists) {
//     displayLists();
//   }
// });*/

// addListForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(addListForm);
//   const newList = {
//     country: formData.get("country"),
//     date: formData.get("date"),
//   };

//   const response = await createLists(newList);
//   error = response.error;
//   const list = response.data;
//   let countryList = lists.map(function (element) {
//     return `${element.lists}`;
//   });
//   console.log(modifiedArr);
// });
