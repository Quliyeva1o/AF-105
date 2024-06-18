//regular
// function getDetails(fname, surname, age, city) {
//   return `${fname} ${surname} is ${age} years old and lives in ${city}`;
// }

//function expression
// const getDetailsExp = function (fname, surname, age, city) {
//   return `${fname} ${surname} is ${age} years old and lives in ${city}`;
// };

//arrow function
// const getDetailsArrow = (fname, surname, age, city) =>
//   `${fname} ${surname} is ${age} years old and lives in ${city}`;

// console.log(getDetailsExp("joe", "doe", 25, "LA"));

// function checkNumber(num, numsArr) {
//   for (let i = 0; i < numsArr.length; i++) {
//     if (numsArr[i] == num) return true;
//   }
//   return false;
// }

// console.log(checkNumber(5, [1, 2, 3, 5, 4]));

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

// function multiply(x,...args) {
//     let res = 1;
//     for (let i = 0; i < arguments.length; i++) {
//         res*=arguments[i];
//     }
// }


// function doubleSalary(salary) {
//     return salary*2;
// }
// function doubleSalary(salary,name) {
//     let doubled = salary*2;
//     return `${name}'s salary is ${doubled}`;
// }

// console.log(doubleSalary(1000));
// console.log(doubleSalary(1000,'eli'));
