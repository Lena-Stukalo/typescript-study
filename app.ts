//task 1
let age: number;
let names: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

age = 50;
names = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};

// task 2
let anything: any;

anything = -20;
anything = "Text";
anything = {};

// task 3
let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

//task 4
let person: [string, number];
person = ["Max", 21];

//task 5
enum Load {
  LOADING,
  READY,
}
// task 6
let union: number | string;
// task 7
let literal: "enable" | "disable";
//task 8
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
// task 9
type DataType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
