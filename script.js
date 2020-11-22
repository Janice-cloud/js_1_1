// Basic JavaScript: Generate Random Whole Numbers with JavaScript
// How to generate a randome whole number
// 1. Use Math.random() to generate a random decimal.
// 2. Multiply that random decimal by 20.
// 3. Use another function, Math.floor() to round the number down to its nearest whole number.
// Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.
// Example of code :  Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
