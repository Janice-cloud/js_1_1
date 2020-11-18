// Basic JavaScript: Iterate Odd Numbers With a For Loop
// For loops don't have to iterate one at a time
// Changing the final-expression, loop can count by even numbers
// Start at i = 0 and loop while i < 10. To increment i by 2 each loop by using i += 2.

var evenArray = [];

for (var i = 0; i < 10; i += 2) {
  evenArray.push(i);
}

console.log(evenArray); // count by even numbers

var oddArray = [];

for (var i = 1; i < 10; i += 2) {
  oddArray.push(i);
}

console.log(oddArray); // count by odd numbers
