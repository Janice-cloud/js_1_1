// Basic JavaScript: Use Conditional Logic with If Statements
// If statements are used to make decisions in code.
// The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses.
// These conditions are known as Boolean conditions and they may only be true or false.
// When the condition evaluates to :
// true :  the program executes the statement inside the curly braces.
// false : the statement inside the curly braces will not execute.

// if condition is true or false statement is executed

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true)); // Yes, that was true
console.log(trueOrFalse(false)); // No, that was false