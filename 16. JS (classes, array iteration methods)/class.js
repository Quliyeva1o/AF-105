// class Animal {
//   //properties

//   //constructor - main method
//   constructor(name, age, color) {
//     this.name = name;
//     if (age < 0) {
//       this.age = 0;
//       // throw new Error('age cannot be less than zero!');
//     } else {
//       this.age = age;
//     }
//     this.color = color;
//   }

//   //methods
//   makeNoise() {
//     console.log("makes noise");
//   }
// }
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let User = class {
//   sayHi() {
//     alert("Hello");
//   }
// };
// User.prototype.sayHi = function () {
//   window.alert(this.name);
// };

// const lion = new Animal("Simba", 20, "white");
// const john1 = new User("John");
// john1.sayHi();
// lion.makeNoise();
// try {
//     const lion = new Animal('Simba',-20,'white');
// } catch (error) {
//     console.log('error: ', error);
// }
// console.log(lion);

//OOP - Inheritance


class Animal{
    //access modifier - public, private, protected, internal
    //fields - public
    name = '';
    age = 0;
    //constructor
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    //methods
    makeNoise(){
        console.log('makes noise');
    }
}

//inheritance
class Lion extends Animal{
    constructor(name,age,hairColor){
        super(name,age);
        this.hairColor = hairColor;
    }
    //method override - polymorphism
    makeNoise(){
        console.log('rawr');
    }
}
class Bird extends Animal{
    constructor(name,age,wingColor){
        super(name,age);
        this.wingColor = wingColor;
    }
    // makeNoise(){
    //     console.log('quack');
    // }
}
class DomesticBird extends Bird{
    constructor(name,age,wingColor,cage){
        super(name,age,wingColor);
        this.cage  = cage;
    }
}
const dBird = new DomesticBird('name',2,'white','golden');
dBird.makeNoise();
class Cow extends Animal{
    constructor(name,age,milkFat){
        super(name,age);
        this.milkFat = milkFat;
    }
    makeNoise(){
        console.log('moo');
    }
}


// const lion = new Lion('Simba',14,'orange');
// const robin  = new Bird('Robin',4,'black');
// const cow1 = new Cow('Cow',2,50);
// cow1.makeNoise();
// lion.makeNoise();
// robin.makeNoise();

