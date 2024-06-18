const generateBtn = document.querySelector('.generate');
const jokeContent = document.querySelector('.joke');
const API_URL = 'https://v2.jokeapi.dev';
const jokeCategorySelect = document.querySelector('.category-select');


window.addEventListener('load',()=>{
    fetch(API_URL+'/categories')
    .then((resp)=>resp.json())
    .then((cat)=>{
        cat.categories.map((category)=>{
            jokeCategorySelect.innerHTML += ` <option value="${category.toLowerCase()}">${category}</option>`
        })
    })
});

generateBtn.addEventListener('click',()=>{
    const selectedCategory = jokeCategorySelect.value;
    fetch(API_URL+`/joke/${selectedCategory}?type=single`)
    .then((resp)=>resp.json())
    .then((data)=>{
        if (data.error) {
            throw new Error('No Joke Found!');
        }
        jokeContent.textContent = data.joke;
    })
    .catch((err)=>{
        jokeContent.textContent = err;
        jokeContent.style.color = 'red';
    });x
})