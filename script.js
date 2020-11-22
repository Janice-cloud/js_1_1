// Basic JavaScript: Generate Random Fractions with JavaScript
// Random numbers are useful for creating random behavior.
// Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive)
// Thus Math.random() can return a 0 but never quite return a 1
// Storing Values with the Equal Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

function randomFraction() {
  return Math.random(1);
}

console.log(randomFraction())