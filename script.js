// Basic JavaScript: Testing Objects for Properties
// Sometimes it is useful to check if the property of a given object exists or not.
// Use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
// hasOwnProperty() returns true or false if the property is found or not.


// obj name of object, checkProp is the property
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet")); // returns kitten

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")); // returns Not Found
