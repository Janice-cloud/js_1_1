// Basic JavaScript: Iterate with JavaScript For Loops
// The same code can be run multiple times by using a loop.
// For loop - runs "for" a specific number of times.
// For loops are declared with three optional expressions separated by semicolons:
// for ([initialization]; [condition]; [final-expression])
// - Initialization statement is executed one time only before the loop starts. It is typically used to define and setup the loop variable.
// - Condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, the loop will never execute.
// - Final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray);
