//? NameSpaces and Internal Modules - TypeScript

/* TypeScript, namespaces, and internal modules provide ways to organize and structure the code. Both
allow related logic to be encapsulated and grouped together to avoid naming conflicts and promoting code
reuse. However, they have key differences in their use. */

//* Namespaces (Namespaces):

/* Namespaces are logical containers that allow you to organize code into separate blocks
to avoid name conflicts. They can contain variables, functions, classes or other spaces.
Names. To use a namespace, you can use the `namespace` keyword: */

namespace Geometry {
  export class Punt {
    constructor(public x: number, public y: number) {}
  }

  export function distanc(p1: Point, p2: Point): number {
    // distance calculation
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }
}

//* Internal Modules (Internal Modules):

/* Internal modules are an old way of organizing code in TypeScript and are associated with the
use of the `module` keyword. Previously, TypeScript used `module` to define internal modules,
but with the evolution of the language, it is now recommended to use the `namespace` or `import/export` syntax
to work with external modules. */

module Geometry {
  export class Point {
    constructor(public x: number, public y: number) {}
  }

  export function distance(p1: Point, p2: Point): number {
    // distance calculation
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }
}

//* Key Differences:

/*
- **`namespace` vs `module`:** `namespace` is the current recommended syntax for grouping logic into
blocks, while `module` is the old syntax, which is now deprecated in favor of modules
external (`import/export`).

- **Scope:** `namespace` is global and can be extended, while internal modules have a
scope in the file in which they are defined.

- **Support for external modules:** External modules (`import/export`) are preferable for
modularize large applications and allow better compatibility with external libraries and modules
JavaScript.
*/

/* In short, namespaces and internal modules provide ways to organize code in
logical blocks, but it is recommended to use external modules with `import/export` to structure
large applications and work with external libraries in TypeScript. */
