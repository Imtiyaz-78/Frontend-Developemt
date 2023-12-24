
// node 8_Math_round.js

/*
  1. The Math.round() method rounds a number to the nearest integer.
  2.  2.49 will be rounded down (2), and 2.5 will be rounded up (3).

*/

var result = Math.round(4.5);
//more than or equal to 5 decimal point will make around 5
console.log(result);


let a = 2.60;
let b = 2.50;
let c = 2.49;
let d = -2.60;
let e = -2.50;
let f = -2.49;

console.log(Math.round(a)); // output --> 3
console.log(Math.round(b)); // output --> 3
console.log(Math.round(c)); // output --> 2
console.log(Math.round(d)); // output --> -3
console.log(Math.round(e)); // output --> -2
console.log(Math.round(f)); // output --> -2
