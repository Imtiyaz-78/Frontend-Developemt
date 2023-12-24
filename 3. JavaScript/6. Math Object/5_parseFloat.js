
// node 5_parseFloat.js

/*
  1. The parseFloat() method parses a value as a string and returns the first number.

*/


let a = 10;
let b = "10";
let c = "10. 33";
let d = "33 4 5 66";
let e = "He was 40";

console.log(parseFloat(a));  // output --> 10
console.log(parseFloat(b));  // output --> 10
console.log(parseFloat(c));  // output --> 10
console.log(parseFloat(d));  // output --> 33
console.log(parseFloat(e));  // output --> NaN

