const btn = document.querySelector('#btn');

btn.addEventListener('contextmenu',function(event){
    //browser default behaviour reset
    event.preventDefault();
    console.log(this);
});

const img = document.querySelector('img');
img.addEventListener('mousemove',(e)=>{
    console.log('mouse move');
})  

const inp = document.querySelector('#f-name');
const alert = document.querySelector('.alert');

inp.addEventListener('blur',function(e){
    console.log('blur')
    // if(e.target.value.trim().length == 0){
    //     alert.classList.replace('d-none','d-block');
    // }
    // else{
    //     alert.classList.replace('d-block','d-none');
    // }
});

const form = document.querySelector('form');
const select = document.querySelector('select');

select.addEventListener('change',(e)=>{
    console.log('event: ',e.target.value);
})

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('event: ',event);
})

document.querySelector('#check').addEventListener('change',(e)=>{
    if (!e.target.checked) {
        e.target.nextElementSibling.setAttribute('disabled','disabled');
    }
    else{
        e.target.nextElementSibling.removeAttribute('disabled','disabled');
    }
})

window.addEventListener('scroll',()=>{
    if (document.body.scrollTop  >= 200) {
        document.body.style.backgroundColor = 'red';
    }
    else{
        document.body.style.backgroundColor = 'transparent';
    }
})