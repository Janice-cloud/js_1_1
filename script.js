// Basic JavaScript: Use the parseInt Function
// parseInt() function parses a string and returns an integer
// Example code :  var a = parseInt("007");
// Above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));
