// ES6: Create an Export Fallback with export default
/* 

export default - Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Dxamples using export default:

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}

export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file.

Additionally, export default cannot be used with var, let, or const

*/

export default function subtract(x, y) {
  return x - y;
}
