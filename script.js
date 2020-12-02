// ES6:  Use * to Import Everything from a File
/* 

To import all contents into current file use below syntax :
 
      import * as 

Example :

import * as myMathModule from "./math_functions.js";

Above import statement will create an object called myMathModule.

The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

myMathModule.add(2,3);
myMathModule.subtract(5,3);

*/

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
