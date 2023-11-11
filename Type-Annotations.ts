//! Type Annotations - TypeScript

/* Type annotations in TypeScript are declarations used to specify the type of a
variable, parameter, object property, or the return type of a function. These type annotations are
essential to take full advantage of the benefits of TypeScript, as they allow the compiler to
TypeScript detect type errors during compile time and provide documentation on the
expected data type. Here are some examples of common type annotations in TypeScript. */

//* 1. **Type annotation for variables:**

let eda: number;
let ag: number = 30; // Correct
// age = "Thirty"; //* Error, since a value of type number is expected

/* In this case, we have declared a variable called `age` and annotated it with the type `number`, which
which means that only numeric values can be assigned to this variable. */

//* 2. **Type annotation for function parameters:**

function sum(a: number, b: number): number {
   return a + b;
}

/* In this example, the `sum` function takes two parameters of type `number` and returns a value of type
`number`. Type annotations on parameters and return type help the compiler verify
that arguments and return values of the correct type are being passed. */

//* 3. **Type annotation for object properties:**

const perso: { name: string; age: number } = {
   name: "John",
   age: 30,
};

/* Here, we have declared a `person` object with two properties, `name` and `age`, and noted their
type of data. This ensures that the object meets the expected structure. */

//* 4. **Custom type annotation (interfaces):**

interface Employee {
   name: string;
   salary: number;
}

const employer: Employee = {
   name: "Carlos",
   salary: 50000,
};

/* In this case, we have defined an interface called `Employee` that describes the structure of an object and
then we have declared a variable `employee` that complies with that structure. */

/* These type annotations are essential to improve the security and readability of the code in
TypeScript. They help prevent type errors, facilitate collaboration in development teams and
They provide clear documentation about the type of data expected in different parts of the code. */
