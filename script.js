// Basic JavaScript: Iterate with JavaScript While Loops
// The same code can be run multiple times by using a loop.
// While loop - runs "while" a specified condition is true and stops once that condition is no longer true.

var myArray = [];

var i = 0;
while (i < 6) {
  myArray.unshift(i);
  i++;
}

console.log(myArray);
