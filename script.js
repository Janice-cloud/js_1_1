// Basic JavaScript: Manipulating Complex Objects
// Store data in a flexible Data Structure
// A JavaScript object is one way to handle flexible data.
// They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
// Object can have :
// - various pieces of metadata
// - a nested array : place a comma after every object in the array, unless it is the last object in the array.
// Objects hold data in a property, which has a key-value format.
// JavaScript Object Notation or JSON is a related data interchange format used to store data.

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Britney Spears",
    title: "Oops!... I did it again",
    release_year: 2000,
    formats: ["CD", "MP3", "LP"],
    gold: true,
  }, 
];

console.log(myMusic[1]);
