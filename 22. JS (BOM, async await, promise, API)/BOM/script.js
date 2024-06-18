const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const timer = document.querySelector('#timer');


let counter = 0;
let intervalID;
startBtn.addEventListener('click',(e)=>{
    e.target.classList.replace('btn-outline-warning','btn-warning');
    intervalID = setInterval(() => {
        counter++;
        timer.textContent = counter;
    }, 1000);
});

pauseBtn.addEventListener('click',(e)=>{
    console.log('test')
    e.target.classList.replace('btn-outline-success','btn-success');
    startBtn.classList.replace('btn-warning','btn-outline-warning');
    clearInterval(intervalID);
});

resetBtn.addEventListener('click',(e)=>{
    e.target.classList.replace('btn-outline-danger','btn-danger');
    startBtn.classList.replace('btn-warning','btn-outline-warning');
    pauseBtn.classList.replace('btn-success','btn-outline-success');
    counter=0;
    timer.textContent = counter;
    clearInterval(intervalID);
})

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');


window.addEventListener('load',()=>{
    setInterval(() => {
        const timeObj = getCurrentDate();
        hour.textContent = timeObj.hour.toString().padStart(2,'0');
        minute.textContent = timeObj.minute.toString().padStart(2,'0');
        second.textContent = timeObj.second.toString().padStart(2,'0');
    }, 1000);
});

function getCurrentDate(){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    return {
        hour: hour,
        minute: minute,
        second: second
    }
}