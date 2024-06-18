// let x = Number(window.prompt("enter your number: "));

//22 -> 21
//26 -> 28
//25 -> 28
// let result = null;
// if (x % 7 == 0) {
//   window.alert("number divided by 7");
// } else {
//   let reminder = x % 7;
//   if (reminder < 4) {
//     result = x - reminder;
//     window.alert(`closest number is ${result}`);
//   } else {
//     result = x - reminder + 7;
//     window.alert(`closest number is ${result}`);
//   }
// }

// let monthNum = Number(window.prompt("Enter Month NO: "));

// switch (monthNum) {
//   case 1:
//   case 2:
//   case 12:
//     window.alert("Winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     window.alert("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     window.alert("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     window.alert("Autumn");
//     break;
//   default:
//     window.alert('Invalid Input');
//     break;
// }

//LOOPS
// let result = 1;
// let num = Number(window.prompt('enter your number: '));
// for (let i = num; i > 0; i--) {
//     result*=i;
// }
// window.alert(`factorial of ${num} is: ${result}`);

// let x = Number(window.prompt("enter your number: "));
// let counter = 0;
// if (x == 0) {
//   window.alert("number is neither prime or complex!");
// } else {
//   for (let i = 2; i < x; i++) {
//     if (x % i == 0) {
//       counter++;
//       window.alert("number is complex");
//       break;
//     }
//   }
//   if (counter == 0) {
//     window.alert("number is prime!");
//   }
// }

// let y = Number(window.prompt("enter your number: "));
// let counter_new = 0;
// let sumEven = 0;
// let sumOdd = 0;

// while (counter_new <= y) {
//     counter_new++;
//     if (counter_new%2==0) {
//         sumEven+=counter_new;
//     }
//     else{
//         sumOdd+=counter_new;
//     }
// }
// window.alert(`result is: ${sumEven*sumOdd}`);

// let x = 5;
// do {
//     console.log('test');
// } while (x>6);

// while (x>6) {
//     console.log('test while')
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//    break;
// }

// let nums = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (i%2==1) {
//         sum+=nums[i];
//     }
// }
// console.log(sum);

let text = "hello elnur";
// ['h','e','l','l','o'];

let names = ["Elmir", "Leman", "Orxan", "Eldar", "Neriman", "Eltun", "Elnur"];

let random = [
  12,
  "salam",
  true,
  false,
  true,
  true,
  23,
  26,
  "necesen",
  [1, 2, 3],
  { name: "Joe" },
];

// for (let i = 0; i < random.length; i++) {
//     if (typeof random[i] == 'object') {
//         console.log('true');
//     }
// }

let person = {
  name: "Joe",
  surname: "Doe",
  age: 23,
  isMarried: false,
  password: "Admin123",
};

for (const key in random) {
  console.log(key);
  // if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key];

  // }
}
console.log("------------------------------");
for (const iterator of random) {
  console.log("iterator: ", iterator);
}
