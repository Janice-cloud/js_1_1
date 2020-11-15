// Basic JavaScript: Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==).
// ==  equality operator, which attempts to convert both values being compared to a common type
// === strict equality operator does not perform a type conversion.
// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

// if condition is true or false statement is executed

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict("7"));
