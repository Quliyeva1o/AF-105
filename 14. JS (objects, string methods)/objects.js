// Object.setPrototypeOf
// Object.create
// Object.assign
// Object comparison, reference type
//destruct, spread
// for in, for of
// Object.keys, Object.entities, Object.values
// Function Constructor
// Object __proto__

// let student = {
//     GPA: 4.5,
//     major: 'web programming'
// }

// let human = {
//     id: 1,
//     name: 'Joe',
//     surname: 'Doe',
//     age: 24,
//     gender: 'male',
//     getFullName: function(){
//         return `${this.name} ${this.surname}`
//     }}
// Object.setPrototypeOf(student, human);
// console.log(student.getFullName())

// const person = {
//   // name: 'Joe',
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };
// const me = Object.create(person);

// me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction();
// // Expected output: "My name is Matthew. Am I human? true"

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// returnedTarget.a = 'updated A';
// console.log('target: ',target);
// console.log('returned target: ',returnedTarget);
// Expected output: true

//destruct
//spread
// const per2 = { ...per1 };
// per1.name = "Adam";
// console.log(per2);

// .toString, JSON.stringify
//array, object
// const name = per1.name;
// console.log(name);
// console.log(id);

// let nums1 = [1, 2, 3, 4];
// let nums2 = [...nums1];

// for (const key in per1) {
//   console.log("key:", key);
// //   if (Object.hasOwnProperty.call(per1, key)) {
// //     const element = per1[key];
// //     console.log("element: ", element);
// //   }
// }
// for (const num of nums1) {
//    console.log(num);
// }

// const person = {
//     id: 1,
//     name: 'Joe',
//     surname: 'Kerry',
//     age: 45
// };
// let keys = Object.keys(person);
// let values = Object.values(person);
// let entries = Object.entries(person);
// console.log(entries[2][1]);

//function constructor
// function Human(id,name,surname,age,isMale){
//     //constructor
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.isMale = isMale;
//     //method
//     this.getFullName = function(){
//         return `${this.name} ${this.surname}`;
//     }
//     this.calcBirthYear = (currentYear)=>{
//         return currentYear-this.age;
//     }
// };
// function Student(gpa,major){
//     this.gpa = gpa;
//     this.major = major;
// }

// const rena = new Human(1,'Rana','Quliyeva',19,false);
// const oqtay = new Human(1,'Rana','Quliyeva',19,false);
// const orxan = new Human(1,'Rana','Quliyeva',19,false);
// const nicat = new Human(1,'Rana','Quliyeva',19,false);
// console.log(rena.getFullName());
// console.log(rena.calcBirthYear(2024));

// const obj1 = Object.setPrototypeOf(new Student(4.3,'programming'),new Human(1,'Rana','Quliyeva',19,false))
// console.log(obj1.gpa);

let animal = {
  eats: true,
};


// let rabbit = animal.__proto__;
// console.log(rabbit)
// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   },
// });

console.log(rabbit);
// alert(rabbit.jumps); // true
