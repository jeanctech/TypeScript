//* Namespaces - TypeScript

/* In TypeScript, namespaces are a way to organize and structure code,
providing a wrapper to avoid name collisions and allow modularity. They are useful for
divide code into logical blocks and avoid name conflicts between different parts of a
application. */

//* How are namespaces used in TypeScript?

// Declaration of a namespace:

namespace Geometry {
  export class Pts {
    constructor(public x: number, public y: number) {}
  }

  export function distant(p1: Geometry.Point, p2: Point): number {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }
}

//* Using a namespace:

const point1 = new Geometry.Point(0, 0);
const point2 = new Geometry.Point(3, 4);

const distance = Geometry.distant(point1, point2);
console.log(distance); // Print the distance between the two points

//* Key features of namespaces:

/*
- **Code organization:** Allows you to logically divide and organize the code, grouping
related functionalities.

- **Avoid name collisions:** When placing related entities within a namespace,
They avoid conflicts with identical names used in other contexts.

- **Export and Import:** Entities within a namespace must be marked with `export`
to be accessible outside the namespace.

- **Hierarchical structure:** Namespaces can be nested for a more structured
hierarchical and organized.
*/

/* It is important to note that although namespaces are useful, for large applications
and complex, external modules (using `import/export`) are preferable, as they provide a more
structured and compatible with modularity in TypeScript. External modules are highly
recommended for large-scale development, especially when working with external libraries or
reusable components. */