

// node 2_Math_abs.js

/*
 1. The Math.abs() method returns the absolute value of a number.
 2. Math.abs(absolute) - convert the negative number to positive number.

*/

let a = Math.abs(7.25);
let b = Math.abs(-7.25);
let c = Math.abs(null);
let d = Math.abs("Hello");
let e = Math.abs(2-3);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// output --->
/*

7.25
7.25
0
NaN
1

*/

// 2nd 
var result = -4545;
result = Math.abs(result);
console.log(result); // output ---> 4545

