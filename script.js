// Basic JavaScript: Comparison with the Less Than Or Equal To Operator
// <= mean  less than or equal to operator : compares the values of two numbers
// If the number to the left is less than or equal to the number to the right, it returns true
// Otherwise, it returns false.
// Less than or equal to converts data types

function testLessOrEqual(val) {
    if (val <= 12) { 
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  console.log(testLessOrEqual(10));
