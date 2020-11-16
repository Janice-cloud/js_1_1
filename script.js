// Basic JavaScript: Comparisons with the Logical And Operator
// && means logical and operator : testing more than one thing at a time
// Returns true if and only if the operands to the left and right of it are true.
// Otherwise, it returns false.

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

console.log(testLogicalAnd(10));
