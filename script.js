// Basic JavaScript: Manipulate Arrays With pop()
// Change the data in an array using the .pop() function
// .pop() is used to "pop" a value off of the end of an array. 
// We can store this "popped off" value by assigning it to a variable.
// In other words, .pop() removes the last element from an array and returns that element.

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();

console.log(removedFromMyArray); // cat, 2
console.log(myArray); // John, 23