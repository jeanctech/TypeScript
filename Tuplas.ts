//* Tuples in TypeScript

/* Tuples in TypeScript are arrays with a fixed number of elements, where each element can be
of a different kind. They are defined using `[]` square brackets and specifying the data types for each
position. */

//* Tuple example:

let persons: [string, number, boolean];

persons = ["John", 30, true];

/* In this example, the tuple `person` has three elements: the first is of type `string`, the second
of type `number` and the third of type `boolean`. */

//* Access to Elements of a Tuple:

// You can access individual elements of a tuple using its index.

let person: string = persons[0]; // Access the first element (index 0)
let ages: number = persons[1]; // Access the second element (index 1)
let isAdults: boolean = persons[2]; // Access the third element (index 2)

//* Assignment and Modification of Values in a Tuple:

person[0] = "Anna"; // Modify the first element
person[1] = 25; // Modify the second element
person[2] = false; // Modify the third element

//* Restrictions and Flexibility:

/* Tuples allow you to define the structure and type of data at specific positions, which
provides a fixed structure and helps maintain data consistency. However, it is important
use them with caution, as they may be less readable if used extensively or if not
They drive clearly. */

/* Tuples are useful for representing structured and heterogeneous data, offering a more
requires working with specific data sets in TypeScript. */
