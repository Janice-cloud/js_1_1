// Basic JavaScript: Practice comparing different values
// == equality operator will perform a type conversion, and then evaluate the values
// === strict equality operator will compare both the data type and value as-is, without converting one type to the other
// typeof : Used to determine the type of a variable or a value

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(typeof 10);
console.log(typeof "10");