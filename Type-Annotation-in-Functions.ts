//? Type Annotation in Functions - TypeScript

/* In TypeScript, type annotations in functions allow you to specify the types of parameters
and the return type of a function. This is useful to help the compiler detect errors and
provide better documentation for the code. Here are examples of type annotations in
functions. */

//* 1. **Type annotation in parameters and return type:**

function sums(a: number, b: number): number {
  return a + b;
}

/* In this example, the `sum` function takes two parameters of type `number` and returns a value of type
`number`. Type annotations on parameters and return type help TypeScript verify
that arguments of the correct type are being passed and that the correct value type is being returned. */

//* 2. **Functions with optional parameters:**

// You can make the parameters of a function optional by adding the question mark `?`:

function greets(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}, you are ${age} years old.`;
  } else {
    return `Hello, ${name}.`;
  }
}

/* In this case, the `age` parameter is optional, so you can call the function with a single
argument, or provide both `name` and `age`. */

//* 3. **Parameters with default values:**

// You can also assign default values to the parameters of a function:

function calculateArea(base: number, height: number = 10): number {
  return (base * height) / 2;
}

/* Here, the `height` parameter has a default value of 10. This means that you can call the
function with a single argument (`base`), and the default value for `height` will be used if not
provides. */

//* 4. **Arrow functions with type annotations:**

// Arrow functions in TypeScript can also have type annotations:

const subtraction = (a: number, b: number): number => a - b;

/* In this example, the `subtract` arrow function takes two parameters of type `number` and returns a value
of type `number`. */

/* These type annotations in functions are useful for improving code security and clarity in
TypeScript. They help prevent type errors and make code more readable and maintainable. */