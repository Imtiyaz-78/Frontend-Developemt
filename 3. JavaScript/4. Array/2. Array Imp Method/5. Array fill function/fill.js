
// node fill.js

// Definition and Usage
// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.

// Syntax
// array.fill(value, start, end)


// fill method array mein har element ko remove karke front-end place kar deta hai 
let arr = ["India", "pakistan", "chaina", "dubai"]; 
let res = arr.fill("United Kingdom");
console.log(res);

// output ------> [ 'United Kingdom', 'United Kingdom', 'United Kingdom', 'United Kingdom']


// 2 Example with position
let arr2 = ["India", "pakistan", "chaina", "dubai"]; 
let res2 = arr2.fill("Saudi", 2 , 4);
console.log(res2); // output ----> [ 'India', 'pakistan', 'Saudi', 'Saudi' ]





