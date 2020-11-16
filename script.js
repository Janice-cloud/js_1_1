// Basic JavaScript:  Chaining If Else Statements
// if/else statements can be chained together for complex logic. 
// Here is example of multiple chained if / else if statements:

function testSize(num) {
    if ( num < 5 ) {
      return "Tiny";
    } else if ( num < 10 ) {
      return "Small";
    } else if ( num < 15 ) {
      return "Medium";
    } else if ( num < 20 ) {
      return "Large";
    } else if ( num >= 20 ) {
      return "Huge";
    } else {
    return "Change Me";
    }
  }
  
  console.log(testSize(7));
