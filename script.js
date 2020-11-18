// Basic JavaScript: Nesting For Loops
// For multi-dimensional array, the same logic can be used as the prior waypoint to loop through both the array and any sub-arrays

// Iterating through a multi-dimensional array
var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// Returns the product of all the numbers in the sub-arrays
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log((product *= arr[i][j]));
    }
  }
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
