//! Basic Concepts - TypeScript

/* TypeScript is a programming language developed by Microsoft that is based on JavaScript and adds
static typing features and other improvements to the language. Here are some basics of
TypeScript. */

//* 1. **Static typing:**

/* TypeScript allows you to specify data types for variables, function parameters, properties of
objects, etc. This helps detect type errors at compile time, making the code
safer and maintainable. */

let age: number = 30;

//* 2. **Interface:**

/* Interfaces are a way to define the shape of an object. You can use them to declare the
structure of the expected data in a class, function or variable. */

    interface Person {
      name: string;
      age: number;
    }

//* 3. **Classes:**

/* TypeScript supports object-oriented programming, which means you can define classes with
properties and methods. */

    class Car {
      flag: string;
      constructor(flag: string) {
        this.brand = brand;
      }
      speed up() {
        console.log(`Accelerating the car ${this.brand}.`);
      }
    }

//* 4. **Inheritance:**

// You can create classes that inherit properties and methods from other classes.

    class Truck extends Car {
      loadLoad() {
        console.log(`Loading cargo on truck ${this.brand}.`);
      }
    }

//* 5. **Modules:**

// TypeScript allows you to organize code into modules to keep it structured and reusable.

    // In a "utils.ts" file
    export function sum (a: number, b: number): number {
      return a + b;
    }

    // In another file
    import {sum} from "./Types/Utils.ts";

//* 6. **Decorators:**

/* Decorators are an advanced TypeScript feature used to add metadata or
additional functionality to classes, methods or properties. */

function MyClassDecorator(constructor: Function) {
   // ... decorator logic
}

@MyClassDecorator
class MyClass {
   //...
}

//* 7. **TypeScript Compiler (tsc):**

/* TypeScript is compiled to JavaScript to be executed in a browser or in a Node.js environment. He
TypeScript Compiler (TSC) converts TypeScript code into JavaScript. */

//* 8. **Configuration (tsconfig.json):**

/* A configuration file `tsconfig.json` is used to define build options and
TypeScript project configuration. */

/* These are fundamental TypeScript concepts that allow you to write more robust and scalable code.
TypeScript has become widely used in web and application development due to its ability
to detect type errors at compile time and provide a better development tool
for larger, more complex JavaScript projects. */
