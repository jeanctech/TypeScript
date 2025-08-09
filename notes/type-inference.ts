//* Type Inference - TypeScript

/* Type inference in TypeScript refers to the compiler's ability to deduce or determine
the type of a variable according to the value with which it is initialized. TypeScript uses the information
available to automatically infer and assign a type to a variable without the need to declare it
explicitly. */

// Type inference example:

let message = "Hello, world"; // TypeScript infers that 'message' is of type string
let number = 42; // TypeScript infers that 'number' is of type number

/* In this case, TypeScript automatically deduces that `message` is of type `string` and that `number` is
type `number` based on the values with which these variables are initialized. */

// Type inference in functions:

/* Type inference also applies to function return values, based on what the
function returns. */

function duplicate(number: number) {
   return number * 2; // TypeScript infers that the function returns a number
}

/* In this example, TypeScript infers that the `duplicate` function returns a value of type `number` because
to the multiplication operation. */

// Limits of type inference:

/* Although TypeScript is powerful at type inference, there are situations where it cannot infer a type,
especially when there is not enough information available. In those cases, you may need
manually specify the type. */

let variableUnType; // TypeScript cannot infer a specific type
variableUnType = "Hello"; // Now it is inferred that it is of type string

let anotherVariable: any; // It is specified that it can be of any type
anotherVariable = 42; // Now a type number has been assigned

/* Type inference is a key feature of TypeScript that simplifies writing code
by reducing the need to explicitly declare types, as long as the information available
it is up to the compiler to determine them precisely. */
