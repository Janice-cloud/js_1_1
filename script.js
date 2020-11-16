// Basic JavaScript: Comparison with the Inequality Operator
// != means "Not Equal" and returns false
// inequality operator will convert data types of values while comparing.

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
