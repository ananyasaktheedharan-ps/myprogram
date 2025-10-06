// Loop from 1 to 10 and print each number
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Function to calculate the sum of all numbers in an array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Function to find the largest number in an array
function largestNumber(arr) {
  return Math.max(...arr);
}

// Function to check if a number is Even or Odd
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Merge two arrays into one using spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

// Filter even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

// Use template literals to create a greeting message
const name = "Alice";
const msg = `Hello ${name}, welcome!`;

// Arrow function to greet a user
const greet = (name) => `Hello, ${name}`;
