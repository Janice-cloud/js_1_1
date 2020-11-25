// ES6: Mutate an Array Declared with const
// Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.
// objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Using s = [2, 5, 7] would be invalid
s[0] = 2
s[1] = 5
s[2] = 7
console.log(s)
}
editInPlace();