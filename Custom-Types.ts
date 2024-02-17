//? Custom Types - TypeScript

/* In TypeScript, custom types allow you to create specific types that conform to the
structure and behavior you need in your program. These types can be reused and provide
an additional layer of security and clarity to the code. */

//* Type:

// The `type` keyword is used to create custom types.

//* Example of a custom type:

type Coordinates = {
  x: number;
  y: number;
};

type User = {
  id: number;
  name: string;
  coordinates: Coordinates; // Using a custom type
};

/* In this example, `Coordinates` is a custom type to represent the coordinates (x, y), y
`User` is a type that contains an identifier, a name, and a set of coordinates. */

//* Union Types:

// You can combine existing or custom types to create more flexible types.

//* Type union example:

type Result = number | string;

// In this case, `Result` can be a number or a string.

//* Type Intersection:

// Allows combining multiple types into a new one.

//* Type intersection example:

type Employe = {
  id: number;
  name: string;
};

type Department = {
  id: number;
  name: string;
};

type EmployeeDepartment = Employee & Department;

// `EmployeeDepartment` is a type that combines the properties of `Employee` and `Department`.

/* Using custom types allows you to define specific, reusable data structures, which
which contributes to a better understanding and maintainability of the code in TypeScript. */
