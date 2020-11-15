// Basic JavaScript: Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order.
// New items can be added at the back of the queue and old items are taken off from the front of the queue.

function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}

testArr = [1,2,3,4,5]; 

console.log("Before: " + testArr); // Before: 1,2,3,4,5

console.log(nextInLine(testArr, 6)); // 1

console.log("After: " + JSON.stringify(testArr)); // After: [2,3,4,5,6]
