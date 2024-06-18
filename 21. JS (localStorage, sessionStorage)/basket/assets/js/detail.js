import data from "./data.js";
const img = document.querySelector('.card-img-top');
const title = document.querySelector('.card-title');

const id = new URLSearchParams(window.location.search).get('id');

const product = data.products.find((x)=>x.id==id);

img.setAttribute('src',product.imgSrc);
img.setAttribute('alt',product.name);
img.setAttribute('title',product.name);
title.textContent = product.name;


const goBackBtn = document.querySelector('.go-back');

goBackBtn.addEventListener('click',()=>{
    window.history.back();
})
