const outerBox =  document.querySelector('.outer-box');
const box =  document.querySelector('.box');
const innerBox = document.querySelector('.inner-box');

//bubbling, capturing

outerBox.addEventListener('click',(e)=>{
    // e.stopPropagation();
    console.log('OUTER BOX CLICKED')
});
box.addEventListener('click',(e)=>{
    // e.stopPropagation();
    console.log('BOX CLICKED')
});
innerBox.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('INNER BOX CLICKED')
});