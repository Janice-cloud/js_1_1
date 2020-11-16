// Basic JavaScript: Comparison with the Greater Than Operator
// > means greater than operator : compares the values of two numbers
// If the number to the left is greater than the number to the right, it returns true.
// Otherwise, it returns false.
// Greater than operator will convert data types of values while comparing.

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));

