// ES6: Use getters and setters to Control Access to an Object
// You can obtain values from an object and set the value of a property within an object.
// These are classically called getters and setters.
// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

/*class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor*/

// Getters and setters are important because they hide internal implementation details.
//  Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature;
console.log(temp.toFixed(2)); // 24.44 in Celsius

thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp); // 26 in Celsius
