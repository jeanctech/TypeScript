//* Inheritance - TypeScript

/* In TypeScript, as in other object-oriented languages, inheritance allows a class
inherit properties and methods from another class. This allows code reuse and the creation of a
class hierarchy. */

// Example of inheritance in TypeScript:

/* Suppose we have a base class `Vehicle` and we want to create a subclass `Car` that inherits from
she. */

class vehicle {
  constructor(public flag: string) {}

  drive(): void {
    console.log(`Driving a vehicle ${this.vehicle}`);
  }
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand);
  }

  speedup(): void {
    console.log(`Accelerating the car ${this.make} - ${this.model}`);
  }
}

/*
- The `Vehicle` class has a constructor that initializes the `make` property and a `drive` method.
- The `Car` class extends the `Vehicle` class with the `extends` keyword and adds its own
constructor and `speed up` method.
*/

// Use of inheritance:

const myCar = new Car("Toyota", "Corolla");
myCar.drive(); // Method inherited from the Vehicle class
myCar.speedup(); // Own method of the Car class

// `super` keyword:

/* - In the child class, `super` is used to call the parent class's constructor. In this example,
`super(brand)` calls the constructor of the `Vehicle` class with the `brand` parameter. */

// Inherited methods and properties:

/* The `Car` class inherits both the `drive` method and the `make` member from the `Vehicle` class.
Additionally, you can add additional methods and properties, such as `speed up` and `model`. */

/* Inheritance is a key feature of object-oriented programming that allows
Code reuse and creating a class hierarchy, resulting in more modular code
and organized. */
