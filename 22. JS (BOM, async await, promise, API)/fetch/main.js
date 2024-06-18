import API_URL from "./constants.js";
const list = document.querySelector(".categories");

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    data.map((category) => {
      list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
        <span>${category.name}</span>
        <a href="detail.html?id=${category.id}" class="btn btn-outline-info">Info</a>
    </li>
        `;
    });
  });
