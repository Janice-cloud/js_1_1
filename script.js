// ES6: Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values.
// This can be done by putting a new name afte a colon when assigning the value

const user = { name: "John Doe", age: 34 };

//Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;

console.log(userName); // userName = 'John Doe'
console.log(userAge); // userAge = 34
// can be read as Y "get the value of user.name and assign it to a new variable named userName" and so on.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday);
console.log(highTomorrow);
