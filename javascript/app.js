/* Get DOM Elements */
const addListForm = document.getElementById("add-list-form");
const removeButton = document.getElementById("remove-button");
const errorDisplay = document.getElementById("error-display");
const countryList = document.getElementById("country-list");

/* State */
let lists = [];
let error = null;

/* Events */
window.addEventListener("load", async () => {
  const response = await getLists();
  error = response.error;
  lists = response.data;
  let modifiedArr = lists.map(function (element) {
    return `${element.lists}`;
  });
});
