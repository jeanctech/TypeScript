//? Anonymous Functions - TypeScript

/* In TypeScript, anonymous functions are those that do not have a name assigned to them and are generally
They are used in contexts where the identity of the function is not crucial. They are defined using the word
`function` key without specifying a name. */

//* Anonymous function example:

let greet = function (name: string): void {
  console.log(`Hello, ${name}!`);
};

/* In this example, `greet` is a variable that contains an anonymous function that takes one argument
`name` of type `string` and displays a greeting message in the console. */

//* Use of anonymous functions:

greet("John"); // Print: Hello, Juan!

// Anonymous functions are useful in situations like:

/*
- Pass functions as arguments to other functions (callbacks).
- To define functions within a larger context without needing to assign them a name.
- When a single-use function is required without the need to reuse it elsewhere.
*

/* Additionally, with the arrow functions introduced in ECMAScript 6, you can also create
anonymous functions more concisely. For example: */

//* Example of anonymous arrow function:

let health = (name: string): void => {
  console.log(`Hello, ${name}!`);
};

/* Arrow functions provide a more compact syntax and keep the `this` context in place
where they are defined, which can be useful in certain cases. */

/* Anonymous functions and arrow functions are useful components in TypeScript to work with
functions that do not need to be referenced by a specific name, providing flexibility in the
code writing. */