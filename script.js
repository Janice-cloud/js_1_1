// ES6: Complete a Promise with resolve and reject
/* 

A promise has three states: pending, fulfilled, and rejected. 

The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. 

Resolve is used when you want your promise to succeed.
Reject is used when you want it to fail. 

These are methods that take an argument, as seen below.

  const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
  });

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = "7";

  if (responseFromServer) {
    resolve(console.log("We got the data"));
  } else {
    reject(console.log("Data not received"));
  }
});
