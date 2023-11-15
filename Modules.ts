//* Modules - TypeScript

/* In TypeScript, modules are a way to organize and structure code in different files,
allowing encapsulation and reuse of functionality. There are two main approaches to
working with modules in TypeScript: the internal modules (also known as namespaces) and
external modules. */

//* Internal Modules (Namespaces or Namespaces):

/* Internal modules allow the code to be organized into logical blocks within the same file
TypeScript. They help avoid name conflicts and structure the code. */

// Example of internal module:

namespace Geometry {
  export const PI = 3.14;

  export function calculateCircumference(diameter: number): number {
    return PI * diameter;
  }
}

//* External Modules:

/* External modules, which use the `import` and `export` syntax, allow the code to be split into
multiple independent and reusable files. */

//* Example of external module:

// File `Circulo.ts`:

export const P = 3.14;

export function calculateCircumference(diameter: number): number {
  return PI * diameter;
}

// `App.ts` file:

import { PI, calculateCircumference } from './Circle.ts';

const diameter = 10;
const circumference = calculateCircumference(diameter);
console.log(`The circumference is: ${circumference}`);

/* In this example, `Circulo.ts` exports the functions and constants that can be imported and used
in another file, `App.ts`. */

//* Use of Modules:

// Import internal module
Geometry.calculateCircumference(10);

// Import from external module
import { calculateCircumference } from './Circle.ts';

/* Modules are essential for organizing and modularizing code in TypeScript applications more
large, facilitating maintenance, reuse and structuring of functionalities. */
