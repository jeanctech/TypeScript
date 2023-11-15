//* Access Modifiers - TypeScript

/* In TypeScript, as in other object-oriented languages, access modifiers
They control the visibility of members of a class, such as properties and methods. These modifiers
They determine where the members of the class can be accessed from. */

//* There are three main access modifiers:

// `public`:

/* It is the default access modifier. Members marked `public` are accessible from
anywhere in the code, either within the class, from child classes (in the case of inheritance) or
from instances of the class. */

// `private`:

/* Members marked as `private` are only accessible within the class in which they are located.
they define. They cannot be accessed from child classes or from instances of the class. */

// `protected`:

/* Members marked as `protected` are accessible within the class itself and in child classes that
They inherit from the class in which they are defined. They cannot be accessed from instances of the class. */

//* Example of using access modifiers:

class Vehicle {
  public flag: string;
  private model: string;
  protected speed: number;

  constructor(brand: string, model: string, speed: number) {
    this.brand = brand; // Accessible anywhere
    this.model = model; // Only accessible within the Vehicle class
    this.speed = speed; // Accessible within the class and its subclasses
  }
}

class Car extends Vehicle {
  speed up() {
    this.speed += 10; // It can be accessed at speed because it is protected
    // this.model is not accessible here, it is private in the parent class
  }
}

const car = new Vehicle("Toyota", "Corolla", 0);
console.log(car.brand); // Accessible
// console.log(car.model); // Error, model is private
// console.log(car.speed); // Error, speed is protected

/* These access modifiers allow you to control encapsulation and security by defining who
can access and modify the members of a class. */
