// Basic JavaScript: Global vs. Local Scope in Functions
// Scope refers to the visibility of variables.
// Global scope : Variables which are defined outside of a function block. This means, they can be seen everywhere in your JavaScript code.
// Local scope: Variables which are declared within a function, as well as the function parameter. Only visible within that function
// It is possible to have both local and global variables with the same name.
// Local variable takes precedence over the global variable.

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;
}

console.log(myOutfit()); // Sweater
