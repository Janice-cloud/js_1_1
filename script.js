// Basic JavaScript: Comparison with the Strict Inequality Operator
// !== means "Strictly Not Equal"
// Strict inequality operator is the logical opposite of the strict equality operator
// Returns false where strict equality would return true and vice versa
// Strict inequality will not convert data types

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));
