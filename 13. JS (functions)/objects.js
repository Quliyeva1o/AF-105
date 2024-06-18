const car = {
  brand: "Mercedes",
  model: "Ceska",
  year: 2001,
  color: "white",
  engine: 2.5,
  milage: 190_000,
  fuelFor1KM: 3,
  fuelCapacity: 50,
  currentFuel: 30,
  drive: function (km) {
    if (this.currentFuel > this.fuelFor1KM * km) {
      this.milage += km;
      this.currentFuel -= this.fuelFor1KM * km;
      console.log("drive");
    } else {
      console.log("not enough fuel");
    }
  },
  getFuel: function (fuel) {
    if (this.fuelCapacity > this.currentFuel + fuel) {
        this.currentFuel += fuel;
    }
    else{
        this.currentFuel = this.fuelCapacity;
        console.log('polnu bak');
    }
  },
};

car.drive(8);
car.getFuel(6);
console.log(car);

// Object.setPrototypeOf
// Object.create
// Object.assign
// Object comparison, reference type
//destruct, spread
// for in, for of
// Object.keys, Object.entities, Object.values
// Function Constructor
// Object __proto__

// delete car.currentFuel;
// let USER_KEY = "username";
// car[USER_KEY] = "elnur";
// car.isNew = false;
// car.model = "GLA";

// console.log(car);

// const user = {}; //empty object
// const user = new Object();
// user.username = 'eldarxxx';
// console.log(user);
