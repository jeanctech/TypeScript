//? Using Import and Export - TypeScript

/* In TypeScript, using `import` and `export` allows you to work with modules to organize and divide the
code in multiple files. This facilitates modularity and code reuse. */

//* Export:

/* The `export` keyword is used to expose functions, variables, classes, etc., from a file
so they can be used by other files. */

//* Export example:

// In a file called Operations.ts
export function sum(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;

export class Calculator {
  //...
}

//* Matter:

/* The `import` keyword is used to access functions, variables, classes, etc., exported from
other files. */

//* Import example:

// In a different file

//* import { sum, PI, Calculator } from './Operations';

const result = sum(5, 3);
console.log(result); // Result: 8

const myCalculator = new Calculator();

//* Default Export:

/* A default element can be exported to a file. It can be a function, a class or any
stuff. */

//* Default export example:

// In a file called Greeting.ts
export default function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

//* Default Element Import:

// When a default element is imported, any name can be used to reference it.

// In another file

/*
 import CustomGreeting from './Greeting';
 customGreeting("John"); // Result: Hello, Juan!
*/

/* The use of `import` and `export` facilitates modularity and code organization in TypeScript,
allowing sharing and reusing functionality in different parts of an application. */