//* Variables - TypeScript

/* In TypeScript, variables are containers for storing data. They are defined with a keyword
(`let` or `const`) followed by the variable name and can optionally be assigned a value. */

//* Declaration of variables:

// `let` and `const`:

/*
    - **`let`:** Used for variables that can change their value.
    - **`const`:** Used for constants whose value will not change once assigned.
*/

let Age:number = 30;
const Pi:number = 3.14;

//* Type Inference:

/* TypeScript allows type inference, meaning that the type of the variable can be inferred
automatically by the value with which it is initialized. */

let messge = "Hello, world"; // TypeScript infers that 'message' is of type string
let numbr = 42;// TypeScript infers that 'number' is of type number

//* Variable Types:

/*
    - **number:** To represent numerical values.
    - **string:** To store text strings.
    - **boolean:** Represents logical values, `true` or `false`.
    - **any:** To represent any type.
    - **arrays:** To store a collection of elements of the same type or mixed types.
    - **objects:** To represent a more complex data structure.
*/

//* Scope of Variables:

/*
    - **Global:** Variables declared outside of functions, accessible throughout the program.
    - **Local:** Variables declared within functions, accessible only within that function.
    - **Block:** Variables declared within blocks (defined by `{}`), such as in loops or conditionals,
    only accessible within that block.
*/

/* Using variables in TypeScript helps maintain and manipulate data in your program. The correct one
Type declaration and assignment improve code security and readability. */
