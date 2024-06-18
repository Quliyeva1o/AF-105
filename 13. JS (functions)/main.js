//regular function
// function sum(x, y) {
//   let result = x + y;
//   return result;
// }
// //function expression = anonym function
// const sumExpression = function (x, y) {
//   return x + y;
// };

// console.log(sumExpression(6, 7));

// //arrow function

// let num1 = 4;
// let num2 = 16;
// let res = sum(num1, num2);
// console.log("res", res);

// //recursive function
// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };



// countDown(5);

// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }


// function getScore(name) {
//     const num1 = 2;
//     const num2 = 3;
  
//     function add() {
//       return `${name} scored ${num1 + num2}`;
//     }
  
//     return add();
//   }
  
//   console.log(getScore('orxan')); // "Chamakh scored 5"

// let sum = (num1,num2)=> num1>0 && num2>0 ? num1+num2 : 0;

// console.log(sum(4,2));


// let sum = function(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum)
// }

// console.log(sum(3,4,5));


function getFullName(fname, surname) {
    return `${fname} ${surname}`;
}
console.log(getFullName('elnur','khalilov'))
