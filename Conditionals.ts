//! Conditionals - TypeScript

/* In TypeScript, just like in JavaScript, you can use conditional structures to control the
flow of your program. Conditional structures allow you to execute different blocks of code
based on a given condition. Here are examples of how to use conditionals in TypeScript. */

//* 1. **Simple `if` statement:**

// The `if` statement is used to execute a block of code if a condition is true.

let age: number = 18;

if (age >= 18) {
   console.log("You are of legal age.");
} else {
   console.log("You are a minor.");
}

//* 2. **`if-else if-else` statement:**

// You can use a series of `if`, `else if` and `else` statements to handle multiple conditions.

let rating: number = 75;

if (rating >= 90) {
   console.log("Passed with A");
} else if (rating >= 80) {
   console.log("Passed with B");
} else if (rating >= 70) {
   console.log("Passed with C");
} else {
   console.log("Failed");
}

//* 3. **Ternary operator:**

// The ternary operator `?` allows you to write conditionals in a more concise way.

let isOlderOfEdd: boolean = (age >= 18) ? true : false;

//* 4. **Switch:**

// The `switch` statement is used to handle multiple cases based on the value of an expression.

let weekday: number = 3;
let dayName: string;

switch (weekday) {
   case 1:
     dayName = "Monday";
     break;
   case 2:
     dayName = "Tuesday";
     break;
   case 3:
     dayName = "Wednesday";
     break;
   default:
     dayName = "Invalid day";
}

//* 5. **Logical operators:**

// You can combine conditions with logical operators such as `&&` (and), `||` (or) and `!` (not).

let isOlderOfAge: boolean = (age >= 18);
let hasLicense: boolean = true;

if (isOlderOfAge && hasLicense) {
   console.log("Can drive.");
} else {
   console.log("Can't drive.");
}

/* These are some examples of how you can use conditionals in TypeScript. The conditional structures
They are essential to make decisions in your code and control the flow of execution based on
different situations. */
