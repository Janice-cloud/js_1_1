// Basic JavaScript: Use Multiple Conditional (Ternary) Operators
// Conditional operators can be chained together to check for multiple conditions.
// Following function uses if, else if, and else statements to check multiple conditions:

function checkSign(num) {
  return num === 0 ? "zero" : num > 0 ? "positive" : "negative";
}

console.log(checkSign(10));
