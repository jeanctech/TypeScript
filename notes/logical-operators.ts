//* Logical Operators - TypeScript

/* Logical operators in TypeScript (and many other programming languages) are used to
perform boolean logic operations. They allow logical expressions to be evaluated and produce a result
true or false. */

// Common logical operators:

// `&&` (logical And - And):

/* The `&&` operator returns `true` if both operands are `true`. If one or both operands are `false`,
returns `false`. */

const a = true;
const b = false;

const reslt = a && b; // result will be false

// `||` (logical Or - Or):

/* The `||` operator returns `true` if at least one of the operands is `true`. Only returns `false` if
both operands are `false`. */

const c = true;
const d = false;

const result = c || d; // result will be true

// `!` (Negation - Not):

// The `!` operator negates the value of an operand, converting `true` to `false` and `false` to `true`.

const e = true;

const resul = !e; // result will be false

// Example of using logical operators in an expression:

const ages = 25;
const hasLicense = true;

if (ages >= 18 && hasLicense) {
   console.log("Can drive");
} else {
   console.log("Can't drive");
}

/* In this example, the `&&` operator is used to evaluate two conditions: age greater than or equal to 18 and
if the person has a license. If both conditions are true, "Can drive" is printed. */

/* Logical operators are essential for making decisions based on conditions and for controlling
the flow of a program, allowing complex logic to be built from Boolean evaluations. */
