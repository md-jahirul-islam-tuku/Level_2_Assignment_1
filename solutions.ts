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

const result5 = toggleReadStatus(myBook);
// console.log(result5);

//* Problem 6 Solution:
