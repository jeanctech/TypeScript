//? Return Types - TypeScript

/* In TypeScript, when defining functions, you can specify the type of data that function will return. This
It is known as "return type" or "return type". It is good practice to specify this type for
help the compiler detect errors and improve code readability. */

//* Return type specification:

function sumS(a: number, b: number): number {
  return a + b;
}

/* In this example, the `sum` function takes two parameters of type `number` and returns a value of type
`number`. */

//* Return of various types:

/* Sometimes a function can return more than one type of data. This can be achieved using the
"type union" syntax. */

function getValue(random: boolean): number | string {
  if (random) {
    return Math.random() > 0.5 ? 10 : "menor o igual a 0.5"; // Aquí se agregó la segunda opción
  } else {
    return "random number not required";
  }
}

/* In this function, if `random` is true, it can return a number or a string. If it is false, only
will return a string. */

// Return of type `void`:

// If a function does not return a value, you can specify it using `void`.

function greetS(): void {
  console.log("Hello!");
  // No value is returned explicitly
}

/* It is important to specify the return type to help the compiler detect errors and ensure
that functions are used consistently in the code. This also improves the understanding of
code, especially in larger projects. */
