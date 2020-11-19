// Basic JavaScript: Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself.
// do...while loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running


function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}


console.log(sum([2, 3, 4], 1)); // 2 

/* the first time through 

function sum([2, 3, 4], 1) {
  if(1 <= 0){ // false this time
    return 0; 
  }else { // this is where we end up
    return sum([2, 3, 4], 0) + 2; // sum will be the result of the recurse back into the function, plus 2
  }
}

 the second time through 

function sum([2, 3, 4], 0) {
  if(0 <= 0){ // true this time 
    return 0; // send this result back up to the first run through
  }else {
    // not relevant this time
  }
}

back in the the first time through, 
we now have a value to work with below
remember, this isn't the 'third' time through,
it is back in the first time run through
just re-printed here so you could see 
where the value gets returned from the second run

function sum([2, 3, 4], 1) {
  if(1 <= 0){ // false this time
    return 0; 
  }else { // this is where we end up
    return sum(0 + 2); // we got a result from the second run through, sum is now 2
  }
}*/

console.log(sum([2, 3, 4, 5], 3)) // total is  9  

// Explaination below 
/*
function sum([2, 3, 4, 5], 3) {
  if (3 <= 0) {
    return 0;
  } else {
    return sum([2, 3, 4, 5], 2) + 4);
  }
}


function sum([2, 3, 4, 5], 2) {
  if (2 <= 0) {
    return 0;
  } else {
    return sum([2, 3, 4, 5], 1) + 3;
  }
}

function sum([2, 3, 4, 5], 1) {
  if (1 <= 0) {
    return 0;
  } else {
    return sum([2, 3, 4, 5], 0) + 2;
  }
}


function sum([2, 3, 4, 5], 3) {
  if (0 <= 0) {
    return 0;
  } else {
return sum(0 + 4 + 3 + 2) // = 9 result from the first, second and third run through
}
}
*/