// ES6: Write Arrow Functions with Parameters
// regular function, you can pass arguments into an arrow function

// doubles input value and returns it
const doubler = (item) => item * 2;
console.log(doubler(4)); // returns 8

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
// the same function, without the parameter parentheses
const doublerWithout = (item) => item * 2;
console.log(doublerWithout(4));

//It is possible to pass more than one argument into an arrow function.
// multiplies he first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2)); // returns 8

// appends contents of arr2 to arr1 so that the function uses arrow function syntax
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));