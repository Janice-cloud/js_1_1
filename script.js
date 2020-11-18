// Basic JavaScript: Iterate with JavaScript Do...While Loops
// do...while loop - will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

// do...while loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log("myArray = " + myArray + "\n" + "i = " + i);
