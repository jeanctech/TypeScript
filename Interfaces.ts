//* Interfaces - TypeScript

/* In TypeScript, interfaces are a powerful tool for defining the shape a script should have.
data structure, such as objects, and specify the form that a type should take. */

//* Example of a simple interface:

// Suppose you want to define the structure of a `Person` object that has a name and an age:

interface Person {
  name: string;
  age: number;
}

//* Interface usage:

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const user: Person = { name: "John", age: 30 };
printPerson(user);

//* In this example:

/*
- The `Person` interface is defined that specifies the structure of an object with the `name` properties
of type `string` and `age` of type `number`.
- The `printPerson` function takes a parameter `person` that must follow the structure defined by the
interface `Person`.
- A `user` object is created that complies with the interface structure and is passed as an argument to the
function `printPerson`.
*/

//* Optional interfaces and additional properties:

/* You can make properties of an interface optional by adding a question mark at the end of its
name. You can also allow additional properties using `propName: any` or `propName: unknown`. */

interface PersonDetails {
  height?: number; // Optional property
  [propName: string]: any; // Additional property
}

//* Interfaces for functions:

// Interfaces can also define the structure that functions should follow.

interface GreetingFunction {
  (name: string): void;
}

const greet: GreetingFunction = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("Ana");

/* Interfaces are useful for defining contracts that objects or functions must fulfill, promoting
consistency in the structure of the code and facilitating its modularity and reuse. */
