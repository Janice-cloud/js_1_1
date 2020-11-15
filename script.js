// Basic JavaScript: Global Scope and Functions
// Scope refers to the visibility of variables.
// Global scope : Variables which are defined outside of a function block. This means, they can be seen everywhere in your JavaScript code.
// Variables which are used without the var keyword are automatically created in the global scope
// This can create unintended consequences elsewhere in your code or when running a function again
// You should always declare your variables with var.

// Declare the myGlobal 
var myGlobal = 10;

function fun1() {
   oopsGlobal = 5; 
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output); 
}

fun1(); 
fun2(); // myGlobal: 10 oopsGlobal: 5


