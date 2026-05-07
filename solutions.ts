// Problem 1:

const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((number) => number % 2 === 0);

// Sample input:
const arr = [1, 2, 3, 4, 5, 6];
const result1 = filterEvenNumbers(arr);
// Output:
// console.log(result1); //* [2, 4, 6]
