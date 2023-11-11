//! Interface Implementation - TypeScript

/* In TypeScript, interfaces define the structure that classes or types must follow. For
To implement an interface in a class, the rules defined by that interface must be followed. */

//* Example of an interface and its implementation:

// Suppose we have an interface `Figure` that defines a method to calculate the area:

interface Figure {
  calculateArea(): number;
}

//* Now, we create a class `Circulo` that implements this interface:

class Circle implements Figure {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// In this example:

/*
- The `Circle` class implements the `Figure` interface using the `implements` keyword.
- The class provides an implementation of the method required by the interface: `calculateArea`.
- The implementation of the `calculateArea` method calculates the area of a circle.
*/

//* Use of interface implementation:

const myCircle = new Circle(5);
const area = myCircle.calculateArea();
console.log("The area of the circle is:", area);

/* When a class implements an interface, it commits to providing an implementation for all
the members defined in that interface. In this case, `Circle` must define `calculateArea` to satisfy
with the `Figure` interface. */

/* Interfaces are useful for defining contracts that classes or types must follow, which promotes
consistency in the code structure and allows working with common abstractions, facilitating
Modularity and code reuse. */
