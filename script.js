// Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String
// To get the last letter of a string, you can subtract one from the string's length
// Same principle used to retrieve the last character in a string can be used to retrieve the Nth-to-last character

var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);
