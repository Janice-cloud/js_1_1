// Basic JavaScript: Assignment with a Returned Value
// Storing Values with the Assignment Operator (=)
// Everything to the right of the equal sign is resolved before the value is assigned
// Meaning we can take the return value of a function and assign it to a variable.

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed); // 2
