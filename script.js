// Basic JavaScript: Comparisons with the Logical Or Operator
// || means logical OR operator : testing more than one thing at a time
// Returns true if either of the operands is true
// Otherwise, it returns false.

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

console.log(testLogicalOr(15));
