
const name = "Imtiyaz";
const repoCount = 786;

// console.log(name + repoCount + " value"); // This is outDated style for printing 

console.log(`My name is ${name} and my repo count is ${repoCount}`); // called string inter Polution
// It's a modern way to print values using backticks (`)


// ==> way of declaring the string
//1. 
const str = 'Imtiyaz';


// 2.
const strObj = new String('Imtiyaz');
console.log(strObj[0]);
console.log(strObj.__proto__);


// String Method 
// 1. function or method
// console.log(strObj.length);
// console.log(strObj.toLowerCase());
// console.log(strObj.toUpperCase());
// console.log(strObj.charAt(3));
// console.log(strObj.indexOf('y'));


const city = "darbhnaga";
console.log(city.substring(0, 4));
console.log(city.slice(-8, 4));

