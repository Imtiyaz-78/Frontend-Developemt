
// node trim.js

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

// 1.
var fullName = " salman ";
var result = fullName.length;
console.log(result); // whitespace remove nahi huwa so output ---> 8

var resultTwo = fullName.trim(); // whitespace ko remove kar diya output ----> 6
console.log(resultTwo.length);


// 2.
var fullName = " salman  g ";
//it will remove the empty space towards left and towards right
var result = fullName.length;

console.log(result);
var resultTwo = fullName.trim();
console.log(resultTwo.length);