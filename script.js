// Basic JavaScript: Use the parseInt Function with a Radix
// parseInt() function parses a string and returns an integer
// It takes a second argument for the radix, which specifies the base of the number in the string.
// The radix can be an integer between 2 and 36.
// Function call looks like :  parseInt(string, radix);
// Example code : var a = parseInt("11", 2);
// The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
