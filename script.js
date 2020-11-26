// ES6: Create Strings using Template Literals
// template literal - special type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

// First, the example uses backticks (`), not quotes (' or "), to wrap the string.
// Second, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings.
// The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore.
// To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }.
// Similarly, you can include other expressions in your string literal, for example ${a + b}.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList)