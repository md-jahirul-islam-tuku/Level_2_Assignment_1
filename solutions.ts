//* Problem 1 Solution:

const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((number) => number % 2 === 0);

// Sample input:
const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result1);

//* Problem 2 Solution:

const reverseString = (str: string): string => [...str].reverse().join("");

// Sample Input:
const result2 = reverseString("typescript");
// console.log(result2);

//* Problem 3 Solution:

