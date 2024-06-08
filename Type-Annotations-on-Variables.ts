//? Type Annotations on Variables - TypeScript

/* In TypeScript, type annotations on variables allow you to declare the type of data to be
will store in a variable. This helps the TypeScript compiler check and ensure that
variables consistently with the specified type. Here are examples of type annotations
in variables. */

//* 1. **Type annotation in a variable:**

let age: number;
age = 30; // Correct
// age_ = "Thirty"; //* Error, since a value of type number is expected

/* In this example, we have declared a variable `age` and noted its type as `number`. This
means that only values of type `number` can be assigned to that variable. */

//* 2. **Type annotation in a variable with initial assignment:**

let nam: string = "Anna";

/* In this case, we have declared a variable `name` with an initial assignment and noted its type
like `string`. TypeScript infers the type based on the initial assignment, but you can also annotate it
explicitly, as shown. */

//* 3. **Type annotation in constants:**

const PI: number = 3.1416;

/* In this example, we have declared a constant `PI` with annotation of type `number`. The constants
They can also have type annotations to ensure that their value does not change from one type to another. */

//* 4. **Type annotation in object variables:**

const personss: { name: string; age: number } = {
   name: "John",
   age: 30,
};

/* In this case, we have declared a variable `person` that stores an object with properties `name` of
type `string` and `age` of type `number`. */

//* 5. **Type annotation in variables with custom types (interfaces):**

interface Employee {
   name: string;
   salary: number;
}

const employee: Employee = {
   name: "Carlos",
   salary: 50000,
};

/* Here, we have declared a variable `employee` with a custom type annotation using a
interface called `Employee`. This helps define the data structure expected in the variable. */

/* These type annotations on variables are essential to guarantee the consistency of the types of
data in your TypeScript code, which helps prevent type errors and makes it easier to understand and
code maintenance. */
