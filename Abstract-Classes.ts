//? Abstract Classes - TypeScript

/* In TypeScript, abstract classes are classes that cannot be instantiated by themselves and are
They are used as templates for other classes that inherit from them. Abstract classes are created using
the keyword `abstract`. Here is an example of how abstract classes are defined and used in
TypeScript. */

abstract class Figure {
  constructor(public color: string) {}

  abstract calculateArea(): number;
}

class Circles extends Figure {
  constructor(public radius: number, color: string) {
    super(color);
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Figure {
  constructor(public width: number, public height: number, color: string) {
    super(color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circles = new Circles(5, "red");
const rectangle = new Rectangle(4, 6, "blue");

console.log("Circle area: " + circles.calculateArea());
console.log("Area of rectangle: " + rectangle.calculateArea());

//* In this example:

/*
  1. `Figure` is an abstract class that defines a property `color` and an abstract method `calculateArea()`.
  The abstract class cannot be instantiated directly, but it provides a common structure for the
  classes that will inherit from it.

  2. `Circle` and `Rectangle` are classes that inherit from `Figure`. They must implement the method
  `calculateArea` defined in the abstract class. This ensures that any class that inherits from `Figure`
  you must provide your own implementation of the `calculateArea` method.

  3. Instances of the `Circulo` and `Rectangle` classes are created, and the `calculateArea` methods are
  called on each of them to calculate the area of the respective figure.
*/

/* Abstract classes are useful when you want to define a common structure for multiple classes
related, but it doesn't make sense to instantiate the abstract class itself. These abstract classes
They help ensure greater consistency in the implementation of derived classes and establish a
contract of methods that must be implemented in the child classes. */