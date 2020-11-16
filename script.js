// Basic JavaScript: Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed.
// When condition is false normally nothing would happen.
// With an else statement, an alternate block of code can be executed.

function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

console.log(testElse(4));
