// Basic JavaScript: Local Scope and Functions
// Scope refers to the visibility of variables.
// Global scope : Variables which are defined outside of a function block. This means, they can be seen everywhere in your JavaScript code.
// Local scope: Variables which are declared within a function, as well as the function parameter. Only visible within that function


function myLocalScope() {
    'use strict';
  
    // Only change code below this line
  var myVar = "Hello world";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);




