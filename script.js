// Basic JavaScript: Accessing Object Properties with Bracket Notation
// Second way to access the properties of an object is bracket notation ([])
// If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
// Property names with spaces in them must be in quotes (single or double)

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(
  "We had a " + entreeValue + " for entree and drank only " + drinkValue + "."
);
