// Basic JavaScript: Comparison with the Equality Operator
// Comparison operators in JavaScript - All of these operators return a boolean true or false value.
// Most basic operator is the equality operator ==
// The equality operator compares two values and returns true if they're equivalent or false if they are not.
// Type Coercion : For JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another.

// if condition is true or false statement is executed

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
