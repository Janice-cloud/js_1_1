// Basic JavaScript: Accessing Object Properties with Dot Notation
// There are two ways to access the properties of an object: 
// dot notation (.) - is what you use when you know the name of the property you're trying to access ahead of time.
// bracket notation ([]) similar to an array.

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  var hatValue = testObj.hat;      
  var shirtValue = testObj.shirt;    

  console.log("My favourite type of hat is a " + hatValue + ". My favourite shirt is a " + shirtValue);
  