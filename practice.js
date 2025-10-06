
// 1. Write a loop to print numbers from 1 to 10
console.log("--- 1. Numbers from 1 to 10 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("\n");

// 2. Write a function that takes an array of numbers and returns the sum
console.log("--- 2. Sum of an array ---");
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
const numbersToSum = [10, 20, 30, 40];
console.log("The sum of [10, 20, 30, 40] is:", sumArray(numbersToSum));
console.log("\n");

// 3. Write a function to find the largest number in an array
console.log("--- 3. Largest number in an array ---");
function findLargest(arr) {
  return Math.max(...arr);
}
const numbersToFindLargest = [3, 8, 2, 10, 5];
console.log("The largest number in [3, 8, 2, 10, 5] is:", findLargest(numbersToFindLargest));
console.log("\n");

// 4. Write a function that checks if a number is even or odd
console.log("--- 4. Check if a number is Even or Odd ---");
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log("5 is:", isEvenOrOdd(5));
console.log("10 is:", isEvenOrOdd(10));
console.log("\n");

// 5. Write a function that reverses a given string
console.log("--- 5. Reverse a string ---");
function reverseString(str) {
  return str.split('').reverse().join('');
}
const originalString = "hello";
console.log(`The reverse of "${originalString}" is:`, reverseString(originalString));
console.log("\n");

// 6. Merge two arrays using the spread operator
console.log("--- 6. Merging two arrays ---");
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("Array a:", a);
console.log("Array b:", b);
console.log("Merged array:", merged);
console.log("\n");

// 7. Use ES6 filter to return even numbers from an array
console.log("--- 7. Filtering for even numbers ---");
const numbersToFilter = [1, 2, 3, 4, 5, 6];
const evens = numbersToFilter.filter(num => num % 2 === 0);
console.log("Original array:", numbersToFilter);
console.log("Even numbers:", evens);
console.log("\n");

// 8. Rewrite the below using template literals
console.log("--- 8. Using template literals ---");
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg);
console.log("\n");

// 9. Rewrite this function using an arrow function
console.log("--- 9. Arrow function ---");
const greet = name => `Hello, ${name}`;
console.log("Using the arrow function:", greet("Bob"));
console.log("\n");
