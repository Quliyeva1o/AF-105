class Human {
  //properties - public,private,protected
  //encapsulation - getters, setters
  //abstraction
  name;
  surname;
  _age;
  static id = 1;
  constructor(name, surname, age) {
    this.id = ++Human.id;
    this.name = name;
    this.surname = surname;
    this._age = age;
  }
//   #getInfo(){

//   }
  static generateNextId(){
    ++Human.id;
  }
  //age
  get age() {
    return this._age;
  }
  set age(val) {
    if (typeof val == "number") {
      if (val > 0) this._age = val;
      else throw new Error('age cannot be negative!');
    } else throw new Error("invalid type!");
  }
}

class Employee extends Human{
    salary;
    department;
    constructor(name, surname, age,salary, department){
        super(name, surname, age);
        this.salary = salary;
        this.department = department;
    }
    getBirthYear(){
        return new Date().getFullYear() - this._age;
    }
}

const joe = new Human("Joe", "Doe", 35); //error
const joe2 = new Human("Joe", "Doe", 45); //error
// const john = new Employee('John','Doe',25,2000,'IT');
// john._age = 66;
console.log(joe);
console.log(joe2);