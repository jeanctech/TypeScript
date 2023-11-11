//! Array and Tuples - TypeScript

/* In TypeScript, arrays and tuples are data structures that allow collections to be stored
of elements, but they have some key differences in flexibility and type. */

//* Arrays:

/* Arrays are data structures that store elements of the same type, and their size can change
dynamically. */

// Array example:

let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let words: string[] = ["Hello", "World"]; // String array

/* Arrays in TypeScript are defined using square brackets `[]` followed by the data type they
will contain. */

// Tuples:

/* Tuples are data structures that allow storing a fixed collection of elements, where each
element can have its own type. Unlike arrays, the number of elements and their types
They are predefined. */

//* Tuple example:

let person: [string, number] = ["John", 30]; // Name and age tuple

/* In this example, the tuple `person` has exactly two elements: the first is of type `string`
(name) and the second is of type `number` (age). */

//* Key differences:

/*
- Arrays are collections of elements of the same type and their size can change dynamically.
- Tuples are fixed collections of elements with types defined for each position and a number
element specific.
*/

/* Tuples can be useful when a specific set of types is required at a position
particular, while matrices are more versatile and flexible in terms of the amount and type of
items they can store. */
