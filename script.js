// ES6: Explore Differences Between the var and let Keywords
// var - can overwrite variable declarations without an error. Which is a problem in larger code by accidentally overwriting a variable that was not intended to be overwriten.
// As this behavior does not throw an error searching and fixing bugs becomes more difficult
// let - solves this potential issue. Which, if a let variable is declared more than once than error of "use strict" will catch the error.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
console.log(catTalk());