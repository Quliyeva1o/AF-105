// const title1 = document.getElementById('title');
// const fnInp = document.getElementsByName('full-name');
// const btn = document.getElementsByTagName('button');
// const headings = document.getElementsByClassName('heading');
// querySelector, querySelectorAll

// const btn1 = document.querySelector('form>input#f-name+button+button');
// const headings2 = document.querySelectorAll('.heading');
// const headingsArr = Array.from(headings2);
// headingsArr.forEach((heading)=>{
//     console.log(heading);
// });

// const list = document.querySelector('.inner-box>ul');

//children

// const ListItemsArr = Array.from(list.children);
// ListItemsArr.forEach(listItem => {
//     console.log(listItem.textContent);
// });

//node-element

// const box = list.closest('.box');

// console.log(box);

// const box = document.querySelector('.box');

// console.log(box.previousElementSibling);

// const arrSize = Number(window.prompt("enter list item count: "));
// const list = document.createElement("ul");
// for (let i = 0; i < arrSize; i++) {
//   const listItemText = window.prompt(`enter list item ${i+1}: `);
//   //list item
//   //   const listItem = document.createElement('li');
//   //   listItem.textContent = listItemText;
//   //   list.append(listItem);

//   //innetHTML
//   list.innerHTML += `<li>${listItemText}</li>`
// }
// document.body.append(list);

// const navList = document.querySelector('#nav');

// navList.remove();

const link = document.querySelector("a");
const img = document.querySelector("img");

// link.className = 'link';

// console.log(link.hasAttribute('data-id'));

// link.setAttribute('target','_blank');
// link.setAttribute('href','https://youtube.com');
// console.log(link.getAttribute('href'));
// img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg');

// img.setAttribute('class','moon-img');

// const moonImg = document.querySelector('.moon-img');

// console.log('image: ',moonImg)

// const contentP = document.querySelector(".content");
// btn.classList.add('btn-secondary');
// console.log(btn.classList)
// btn.addEventListener("click", function () {
//   // console.log(this.textContent);
//   if (this.getAttribute("data-active") == "true") {
//     contentP.style.color = "red";
//     contentP.style.fontSize = "30px";
//     this.setAttribute('data-active','false');
//   } else {
//     contentP.style.color = "black";
//     contentP.style.fontSize = "16px";
//     this.setAttribute('data-active','true');
//   }
// });


const btn = document.querySelector(".btn");

btn.addEventListener('click',function(){
    // if (this.classList.contains('active-btn')) {
    //    this.classList.remove('active-btn');
    // }
    // else{
    //   this.classList.add('active-btn');
    // }

    this.classList.toggle('active-btn');
    // this.classList.replace('btn-primary','test');
})