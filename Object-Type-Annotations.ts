//? Object Type Annotations - TypeScript

/* In TypeScript, object type annotations are used to declare the type of an object
or data structure. These annotations allow the TypeScript compiler to verify and ensure that
objects are used according to the specified type. Here are some examples of annotations
Object types in TypeScript. */

//* 1. **Simple object type annotation:**

const persons : { name: string; age: number } = {
  name: "John",
  age: 30,
};

/* In this example, `person` is an object with two properties: `name` and `age`, and we have noted the type
object so that TypeScript knows that these properties must be of type `string` and `number`,
respectively. */

//* 2. **Interfaces:**

// You can define interfaces to describe the shape of an object:

interface persons {
  name: string;
  age: number;
}

const persons1 : persons = {
  name: "Anna",
  age: 25,
};

/* In this case, we have created an interface `Person` that defines the structure of an object with properties
`name` and `age`. */

//* 3. **Optional type annotation:**

// You can make optional properties on an object using the `?` operator:

interface Product {
  name: string;
  price: number;
  description?: string;
}

const product1: Product = {
  name: "Product 1",
  price: 10,
};

const product2: Product = {
  name: "Product 2",
  price: 20,
  description: "Product description 2",
};

/* The `description` property on the `Product` type is optional, meaning it is not necessary when
create objects of that type. */

/* These are some common ways to annotate object types in TypeScript. The type annotations are
a fundamental part of TypeScript and will help you detect errors at compile time and write
more secure and readable code. */
