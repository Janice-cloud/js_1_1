// ES6: Use the Spread Operator to Evaluate Arrays In-Place
// spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

// ES5 code below uses apply() to compute the maximum value in an array:
// Math.max.apply(null, arr) needed to be used because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

//  spread operator makes this syntax much better to read and maintain

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

// ...arr returns an unpacked array. It spreads the array. The spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

//const spreaded = ...arr; // will throw a syntax error

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];

console.log(arr2);
