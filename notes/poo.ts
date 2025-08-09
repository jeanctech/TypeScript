//* Poo - TypeScript

/* Programming Object Oriented - Poo in TypeScript is based on the fundamental principles of
Poo, incorporating concepts such as classes, objects, inheritance, encapsulation, polymorphism and
abstraction. */

// Classes:

/* Classes in TypeScript are the basic block for creating objects. They define the structure, the
behavior and properties of an object. */

// Example of a class in TypeScript:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  }
}

// Objects:

/* Objects are instances of a class. They are created from a class and can access its
properties and methods. */

// Creating an object:

const persons1 = new Person("John", 30);
person1.greet(); // Output: "Hello, I'm Juan and I'm 30 years old."

// Inheritance:

/* Inheritance allows one class to inherit properties and methods from another, which promotes
code reuse. */

// Example of inheritance in TypeScript:

class Employee extends Person {
  charge: string;

  constructor(name: string, age: number, position: string) {
    super(name, age);
    this.charge = charge;
  }

  jobInfo(): void {
    console.log(`I am ${this.name}, I am ${this.age} years old and I am ${this.position}.`);
  }
}

// Encapsulation:

/* Encapsulation allows you to restrict access to certain components of an object. In TypeScript,
It is done using the access modifiers: `public`, `private`, and `protected`. */

// Polymorphism:

/* Polymorphism allows objects of different classes to be treated as a common type. This
allows you to write more generic and flexible code. */

// Abstraction:

/* Abstraction refers to the ability to hide internal details and show only the
essential characteristics and functionalities of an object. */

/* Poo in TypeScript provides an organized and structured approach to developing
applications, allowing the creation of more readable, maintainable and scalable code. */
