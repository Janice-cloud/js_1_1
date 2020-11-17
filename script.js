// Basic JavaScript:  Adding a Default Option in Switch Statements
// Switch statement may not be able to specify all possible values as case statements.
// Default statement can be added which will be executed if no matching case statements are found.
// It's like the final else statement in an if/else chain.
// Default statement should be the last case.

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff(1));
