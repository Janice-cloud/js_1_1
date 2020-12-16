// Regular Expressions: Remove Whitespace from Start and End
/* 

Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

*/

// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.



let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); 

console.log(result); // "Hellow, World!"

// + search for at least one word character
// \s white space
// $ matches anything with number at the end of a string
// ^ matches anything at the begining of the string
// g global search
// | global search to find any of the specified alternatives

// .replace replaces any spaces with no space.

