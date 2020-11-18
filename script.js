// Basic JavaScript: Count Backwards With a For Loop
// For loop can also count backwards, so long as the right conditions are defined.
// To count backwards by twos, need to change the initialization, condition, and final-expression
// Start at i = 10 and loop while i > 0. Will decrement i by 2 each loop with i -= 2

var evenArray = [];
for (var i = 10; i > 0; i -= 2) {
  evenArray.push(i);
}

console.log(evenArray); // count by even numbers

var oddArray = [];

for (var i = 9; i > 0; i -= 2) {
  oddArray.push(i);
}

console.log(oddArray); // count by odd numbers
