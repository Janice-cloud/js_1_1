// Basic JavaScript: Iterate Through an Array with a For Loop
// Common task in JS is to iterate through the contents of an array.
// One way to do that is with a for loop.

// Iterating through an Array
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// adding numbers in an Array
var myArr = [2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  console.log((total += myArr[i]));
}
