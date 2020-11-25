// ES6: Declare a Read-Only Variable with the const Keyword
// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only.
// They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
// trying to reassign a variable declared with const will throw an error
// common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
// use uppercase variable identifiers for immutable values
// use lowercase or camelCase for mutable values (objects and arrays)

function printManyTimes(str) {
  "use strict";
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");