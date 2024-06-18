const productNameInp = document.querySelector("#product-name");
const productPriceInp = document.querySelector("#product-price");
const productCountrySelect = document.querySelector("#country");
const productForm = document.querySelector("form");
const productsList = document.querySelector(".products-list");
const nameAlert = document.querySelector(".product-name-alert");
const priceAlert = document.querySelector(".product-price-alert");
const countryAlert = document.querySelector(".product-country-alert");
const submitBtn = document.querySelector(".submit-btn");

class Product {
  #price;
  constructor(name, country, price = 0) {
    this.name = name;
    this.#price = price;
    this.country = country;
  }
  get price() {
    return this.#price;
  }
  set price(value) {
    if (value < 0 && typeof value !== "number") {
      throw new Error("product price cannot be negative");
    } else {
      this.#price = value;
    }
  }
}
const products = [];
//form submit
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (productNameInp.value.trim().length < 5) {
    nameAlert.classList.replace("d-none", "d-block");
  }
  if (Number(productPriceInp.value) < 0 || productPriceInp.value === "") {
    priceAlert.classList.replace("d-none", "d-block");
  }
  if (productCountrySelect.value === "") {
    countryAlert.classList.replace("d-none", "d-block");
  }
  if (!checkName || !checkPrice || !checkCountry) {
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.replace("btn-outline-warning", "btn-outline-danger");
  } else {
    const newProduct = new Product(
      productNameInp.value,
      productCountrySelect.value,
      productPriceInp.value
    );
    products.push(newProduct);
    //form reset
    productNameInp.value = "";
    productPriceInp.value = "";
    productCountrySelect.value = "";
    //html add
    createListItem(newProduct);
    checkName = false;
    checkPrice = false;
    checkCountry = false;
  }
});
let checkName = false;
let checkPrice = false;
let checkCountry = false;

productNameInp.addEventListener("keyup", (e) => {
  if (e.target.value.trim().length < 5) {
    nameAlert.classList.replace("d-none", "d-block");
    checkName = false;
  } else {
    nameAlert.classList.replace("d-block", "d-none");
    checkName = true;
  }
  if (checkName && checkPrice && checkCountry) {
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.replace("btn-outline-danger", "btn-outline-warning");
  }
});
productPriceInp.addEventListener("keyup", (e) => {
  if (Number(productPriceInp.value) < 0 || productPriceInp.value === "") {
    priceAlert.classList.replace("d-none", "d-block");
    checkPrice = false;
  } else {
    priceAlert.classList.replace("d-block", "d-none");
    checkPrice = true;
  }
  if (checkName && checkPrice && checkCountry) {
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.replace("btn-outline-danger", "btn-outline-warning");
  }
});
productCountrySelect.addEventListener("change", (e) => {
  if (productCountrySelect.value === "") {
    countryAlert.classList.replace("d-none", "d-block");
    checkCountry = false;
  } else {
    countryAlert.classList.replace("d-block", "d-none");
    checkCountry = true;
  }
  if (checkName && checkPrice && checkCountry) {
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.replace("btn-outline-danger", "btn-outline-warning");
  }
});
function createListItem(product) {
  if (productsList.children[0].classList.contains("empty")) {
    productsList.innerHTML = `<li class="list-group-item">${product.name}, <b>${product.price}$</b> | ${product.country}</li>`;
  } else {
    productsList.innerHTML += `<li class="list-group-item">${product.name}, <b>${product.price}$</b> | ${product.country}</li>`;
  }
}
