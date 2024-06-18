// function - higher order function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}
// passing function as an argument
// greet('Peter', callMe);

// function sum(num1,num2,callbackFn){
//     let sum = num1+num2;
//     callbackFn(sum);
//     return sum;
// }

//callback func
// function display(res){
//     console.log('sum is: ',res);
// }

// let result = sum(5,7,display);

function calc(num1, num2, callbackFn) {
  const result = callbackFn(num1, num2);
  return result;
}
//callback functions
function add(x, y) {
  return x + y;
}

let num1 = 24;
let num2 = 8;

// console.log(calc(num1, num2, add));
// console.log(
//   calc(num1, num2, function multiply(x, y) {
//     return x * y;
//   })
// );
// console.log(
//   calc(num1, num2, (x, y) => {
//     return x / y;
//   })
// );
// console.log(
//   calc(num1, num2, function minus(x, y) {
//     return x - y;
//   })
// );
