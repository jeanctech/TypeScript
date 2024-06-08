//? Functions - TypeScript

/* Functions in TypeScript are blocks of code that can be executed and reused to perform
specific tasks. They can take parameters, perform operations, and return a value. */

//* Function declaration:

// Functions with and without return:

// Function without Return
function gree(name: string): void {
  console.log(`Hello, ${name}!`);
}

// Function with Return
function sums(a: number, b: number): number {
  return a + b;
}

/*
- `greet` is a function that takes an argument `name` of type `string` and does not return a value
(we use `void` to indicate that it does not return anything).
- `sum` is a function that takes two arguments of type `number` and returns a result of type `number`.
*/

//* Function usage:

greet("John"); // Call to the 'greet' function
const results = sum(3, 4); // Call to the 'sum' function
console.log(result); // Print the result of the sum: 7

//* Functions with optional parameters:

/* In TypeScript, you can make function parameters optional by adding a sign
question mark at the end of its name and define a default value. */

function constructMessage(text: string, emphasize?: boolean): string {
  if (emphasize) {
    return text.toUpperCase();
  }
  return text;
}

// - `emphasize` is an optional parameter marked with `?`.

//* Functions with variable number of arguments:

function printNumbers(...numbers: number[]): void {
  numbers.forEach(number => console.log(number));
}

// Using `...` before the parameter name allows a variable number of arguments to be passed.

//* Functions as expressions:

// Functions can also be assigned to variables:

const multiply = function(a: number, b: number): number {
  return a * b;
};

// These assigned functions can be anonymous or have names.

/* Functions are fundamental in TypeScript and offer flexibility to modulate and reuse the
code, allowing for more structured and organized writing. */
