// ES6: Use Arrow Functions to Write Concise Anonymous Functions
// JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function.
// Instead, we create inline functions.
// We don't need to name these functions because we do not reuse them anywhere else. Often the  following syntax is used:
/* const myFunc = function() {
  const myVar = "value";
  return myVar;
}*/

//  Instead, you can use arrow function syntax:
/* const myFunc = () => {
  const myVar = "value";
  return myVar;
}*/

// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements: (This code will still return value by default.)

// const myFunc = () => "value";

// JavaScript syntax
var magicJS = function () {
  "use strict";
  return new Date();
};
console.log(magicJS());

// ES6 syntax
const magic = () => {
  "use strict";
  return new Date();
};
console.log(magic());
