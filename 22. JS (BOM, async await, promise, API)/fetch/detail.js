import API_URL from "./constants.js";
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const id = new URLSearchParams(window.location.search).get("id");
const loader = document.querySelector(".loading");
const dataWrapper = document.querySelector(".data");

fetch(API_URL + `/${id}`)
  .then((res) => res.json())
  .then((data) => {
    dataWrapper.classList.replace('d-none','d-block');
    title.textContent = data.name;
    desc.textContent = data.description;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loader.classList.add("d-none");
  });
