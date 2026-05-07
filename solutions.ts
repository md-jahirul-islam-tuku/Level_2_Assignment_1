//* Problem 1 Solution:

const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((number) => number % 2 === 0);

// Sample input:
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(evenNumbers);

//* Problem 2 Solution:

const reverseString = (str: string): string => [...str].reverse().join("");

// Sample Input:
const revStr = reverseString("typescript");
// console.log(revStr);

//* Problem 3 Solution:

type StringOrNumber = string | number;

const checkType = (param: StringOrNumber): string => {
  if (typeof param === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Sample Input:
const typeOf_1 = checkType("Hello");
const typeOf_2 = checkType(42);
// console.log(typeOf_1);
// console.log(typeOf_2);

//* Problem 4 Solution:

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };
const result_4 = getProperty(user, "name");
// console.log(result_4);

//* Problem 5 Solution:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookWithReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookWithReadStatus => {
  return {
    ...book,
    isRead: true,
  };
};

// Sample input:
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const result_5 = toggleReadStatus(myBook);
// console.log(result_5);

//* Problem 6 Solution:

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
// Sample Input:
const studentDetails = new Student("Alice", 20, "A");
const result_6 = studentDetails.getDetails();
// console.log(result_6);

//* Problem 7 Solution:

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((number) => arr2.includes(number));
};
// Sample Input:
const result_7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// console.log(result_7);
