// Basic JavaScript: Manipulate Arrays With shift()
// .shift() removes the first element instead of the last.

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift()

console.log(removedFromMyArray); // John, 23
console.log(myArray); // dog, 3