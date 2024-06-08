//? Enumerations - TypeScript

/* Enums in TypeScript are a way to define sets of constants with friendly names,
making it easier to work with predefined sets of values. Enumerations allow us to represent
a set of named values. Here's a basic example of how to use enums in TypeScript. */

enum WeekDay {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

let days : WeekDay = WeekDay.Tuesday;

console.log("Today is: " + WeekDay[days]); // "Today is Tuesday"

// In this example:

/*
- An enumeration `DayWeek` is defined that represents the days of the week.
- Enums automatically assign numerical values to each member, starting with 0 by default. For example, `Monday` will have the value `0`, `Tuesday` will have the value `1`, and so on.
- You can explicitly assign values to enumeration members if you wish.
*/

enum WeekDay {
  Lu,
  Mr,
  My,
  Ju,
  Saw,
  Yes,
  Do
}

let say: WeekDay = WeekDay.Tuesday;

console.log("Today is: " + WeekDay[say]); // "Today is: Tue"

/* You can also access the numeric value or readable name of an enumeration member using the
value or name respectively. This is useful for working with enumeration values.
more readable and understandable way in the code. */

/* Enums are useful when you need to represent a fixed set of related values and
you want to have a descriptive name for those values instead of using numbers or strings directly
In the code. */
