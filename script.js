// Basic JavaScript: Access Multi-Dimensional Arrays With Indexes
// Using brackets to access your array,
// The first set of brackets refers to the entries in the outer-most (the first level) array
// Each additional pair of brackets refers to the next level of entries inside.

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

console.log(myData);
