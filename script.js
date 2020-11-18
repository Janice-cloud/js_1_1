// Basic JavaScript: Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = undefined; 

gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
