//?  Classes- TypeScript

/* In TypeScript, classes are a fundamental concept of object-oriented programming that gives you
allows you to define data structures and behaviors in one place. Below is a
Basic example of how to define and use classes in TypeScript. */

class person {
  // Properties
  name: string;
  age: number;

  // Builder
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const person1 = new person("Ana", 30);

// Access the properties and methods of the instance
console.log(person1.name); // Ana
console.log(person1.age); // 30
person1.greet(); // Hello, my name is Ana and I am 30 years old.

//* In this example:

// 1. We define a class called `Person` that has two properties: `name` and `age`.

/* 2. The class has a constructor that is used to initialize the properties when a class is created
instance of the class. */

// 3. We have also defined a method called `greet()` that displays a greeting in the console.

/* To create an instance of the `Person` class, we use the `new` operator and call the constructor
with the appropriate values. */

/* TypeScript classes can have properties, methods, constructors and inheritance, which makes them
It becomes a powerful tool to organize and structure your code. Additionally, TypeScript allows you
Add type annotations to method properties and parameters to provide security and
autocompletion during development. */

//* Here is an example of class inheritance in TypeScript:

class student extends person1 {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying in the grade ${this.grade}.`);
  }
}

const student1 = new student("Carlos", 20, "Fourth");
student1.greet(); // Inherit the method from the Person class
student1.study(); // Specific method of the Student class

/* In this case, the `Student` class inherits from the `Person` class and adds a `grade` property and a
`study` method. Classes and inheritance are essential concepts in TypeScript to organize and
reuse code effectively. */
