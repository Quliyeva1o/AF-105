// let x = 4;
// x+=4; // x = x + 4;

// console.log(5>5);

//arithmetic
//assignment
//comparison
//logical &&, ||

// console.log(!true && (false || true));

//conditions
// let human1 = {
//     name: 'Joe',
//     age: 17,
//     balance: 30
// }
// let human2 = {
//     name: 'Marshall',
//     age:24,
//     balance: 40
// }
// let human3 = {
//     name: 'Robin',
//     age:21,
//     balance: 100
// };

// console.log('Welcome to CinemaPlus');
// let ticketPrice = 8;

// if (human1.age > 18) {
//     human1.balance -= ticketPrice;
//     console.log('welcome!');
//     console.log(`${human1.name}'s balance is: ${human1.balance}`);
// }
// else if(human1.age == 18){
//     human1.balance -= ticketPrice/2;
//     console.log('welcome!');
//     console.log(`${human1.name}'s balance is: ${human1.balance}`);
// }
// else{
//     console.log('boyu gelersen!')
// }

// let x = 10;
// let y = 10;
// let z = 9;

// if (x>y && x>z) {
//     console.log('x',x);
// }
// else if(y>x && y>z){
//     console.log('y',y);
// }
// else if(x==y && x==z && y==z){
//     console.log('all are equal');
// }
// else{
//     console.log('z',z);
// }

let currentDay = 6;

switch (currentDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.error("Invalid Input!");
    break;
}
