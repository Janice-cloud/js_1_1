// Basic JavaScript: Logical Order in If Else Statements
// Order is important in if, else if statements.
// The function is executed from top to bottom so need to be careful of what statement comes first.

function unorderedLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(unorderedLogic(2)); // Less than 10

function orderedLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderedLogic(2)); // less than 5
