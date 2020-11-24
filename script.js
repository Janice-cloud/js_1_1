// Basic JavaScript: Use Recursion to Create a Countdown
// Complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.


function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
  return;
}
console.log(countdown(10));
