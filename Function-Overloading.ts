//! Function Overloading - TypeScript

/* Function overloading in TypeScript allows you to define multiple variants of a function with
different combinations of parameter types and quantities. This allows you to call a function with
different arguments and the compiler automatically selects the most appropriate version. */

//* Example of function overloading in TypeScript:

function showInformation(x: number): void;
function showInformation(x: string): void;
function showInformation(x: number | string): void {
   if (typeof x === "number") {
     console.log(`Number: ${x}`);
   } else if (typeof x === "string") {
     console.log(`String: ${x}`);
   }
}

/* In this example, the `showInformacion` function is defined with two variants: one that accepts a
parameter of type `number` and another that accepts a parameter of type `string`. However, both versions
They have the same name and share the same implementation. */

//* Use of function overloading:

showInformation(10); // Call the version with number parameter
showInformation("Hello"); // Call the version with string parameter

/* The TypeScript compiler will choose the correct version of the function based on the type of argument being
happens.

//* Advantages of function overloading:

/*
- **Clarity:** Allows you to define specific behaviors for different types of arguments, making
the most readable code.
- **Security:** Helps avoid errors by ensuring argument types are handled
correctly.
*/

/* Function overloading is a powerful tool for writing more expressive and secure code,
especially when it comes to functions with different behaviors based on the types of their
arguments. */
