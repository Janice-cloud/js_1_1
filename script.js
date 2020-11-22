// Basic JavaScript: Generate Random Whole Numbers within a Range
// Can generate a random number between two specific numbers.
// Define a minimum number min and a maximum number max
// Example code :  Math.floor(Math.random() * (max - min + 1)) + min;

function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin +1)) + myMin;
}


console.log(randomRange(20, 30));
