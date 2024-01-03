
// <==================> Maths <================>

const n = 100000;
// console.log(n.toLocaleString('en-IN'));
// console.log(n.toFixed(2)); // 100000.00


// console.log(Math);
// console.log(Math.abs(-200)) // they conevrt negative to positive  
// console.log(Math.round(4.6)); // o/p 5
// console.log(Math.ceil(4.2)); // o/p 5
// console.log(Math.floor(4.9)); // o/p 4 // floor are round lowest value 
// console.log(Math.min(3, 2, 8, 1, 10, 80)); // 1
// console.log(Math.max(3, 2, 8, 1, 10, 80)); // 80


console.log(Math.random()); // 0.48093695063610875
console.log((Math.random() * 10) + 1); // they will give random valune
console.log(Math.floor(Math.random() * 10) + 1); // they will give random valune


// Math.random() give values b/w 0 to 1
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
