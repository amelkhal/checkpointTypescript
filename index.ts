// Basic Types
// let id: number = 5;
// let company: string = "GomyCode";
// let available: boolean = true;
// let myfavorite: any = "Hello";

// myfavorite = 6;

// let ids: number[] = [1, 2, 3, 4, 5];

// let arr: any[] = [1, true, "Hello"];

// console.log(arr);

// Tuple

// let Person: [number, string, boolean] = [11, "Jhon", false];

// Tuple Array

// let employee: [number, string][] = [
//   [1, "Jhon"],
//   [2, "Oussema"],
//   [3, "Amine"],
// ];

// // Union

// let productId: string | number;

// productId = "10";

// // Enum

// enum Directions {
//   Up = 10, // Default 0
//   Down,
//   Left,
//   Right,
// }
// enum Directions2 {
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right",
// }

// console.log(Directions.Up);
// console.log(Directions.Down);
// console.log(Directions.Left);
// console.log(Directions.Right);
// console.log(Directions2.Up);
// console.log(Directions2.Down);
// console.log(Directions2.Left);
// console.log(Directions2.Right);

///Objects

// type User = {
//   id: number;
//   name: string;
// };

// const user: User = {
//   id: 1,
//   name: "John",
// };

// console.log(user);

// Type Assertion

// let cid: any = 1;
// let customerId = <number>cid;

// // customerId = true;

// /////////////////////////////////////////////////
// // Function

// function addNum(x: number, y: number): number {
//   return x + y;
// }

// console.log(addNum(10, 10));

// function log(message: string | number): void {
//   console.log(message);
// }
// log("Hello");

//////////////////////////////////
//Interfaces

// interface UserInterface {
//   id: number;
//   name: string;
//   age?: number;
// }

// const user1: UserInterface = {
//   id: 1,
//   name: "Oussema",
// };

// user1.id = 20;
// console.log(user1);

// interface MathFunc {
//   (x: number, y: number): number;
// }

// const add: MathFunc = (x, y) => x + y;
// const sub: MathFunc = (x, y) => x - y;

// console.log(add(10, 2));
// console.log(sub(10, 2));

//Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registred`;
  }
}

const user1 = new Person(1, "Oussema");
const user2 = new Person(2, "Donia");

console.log(user1.register());
console.log(user2.register());

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const employee1 = new Employee(10, "Amine", "Developer");
console.log(employee1);
console.log(employee1.register());

/// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Amine", "Donia", "Amel"]);

numArray.push("hello");

function myFunction<T>(a: T): T {
  return a;
}

console.log(myFunction<number>(10));
