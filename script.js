// Regular Expressions: Match All Non-Numbers
/* 

The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\D/g; 
let result = movieName.match(numRegex).length;


console.log(result); 
