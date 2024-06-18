// const currentDate1 = new Date('2022-03-12');
// const currentDate2 = new Date('2022-03-16');


// console.log('date: ',currentDate1.getUTCFullYear());
// const diffMilli = new Date(currentDate2.getTime() - currentDate1.getTime());
// const seconds = diffMilli / 1000;
// console.log(seconds);
// const minutes = seconds / 60;
// console.log(minutes);
// const hours = minutes / 60;
// console.log(hours);
// const days = hours / 24;
// console.log(days);
// // console.log('difference: ',diff);
// console.log('date: ',currentDate2);


const currentDate = new Date();
document.querySelector('#time').textContent = moment(currentDate).format('L');