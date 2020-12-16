// Regular Expressions: Check For Mixed Grouping of Characters
/* 

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true

*/

//  regex checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
// regex checked against myString and either true or false is returned depending on whether the regex matches.

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; 
let result = myRegex.test(myString); 

console.log(result); 

// .* to allow for middle names.

