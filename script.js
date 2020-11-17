// Basic JavaScript:  Returning Boolean Values from Functions
// Comparison with the Equality Operator all comparison operators return a boolean true or false value
//  if/else statement to do a comparison, like this:
/*
    function isEqual(a,b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
    }*/
// better way is to use === which returns true or false, we can return the result of the comparison like this:
/*
    function isEqual(a,b) {
    return a === b;
    }*/

function isLessIfElse(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(isLessIfElse(10, 15)); // True

function isLessComparisonEquality(a, b) {
  return a <= b;
}
console.log(isLessComparisonEquality(10, 15)); // True
