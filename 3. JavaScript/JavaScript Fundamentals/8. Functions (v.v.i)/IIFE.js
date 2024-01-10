
// IIFE: Immediately Invoked function Expressions
// Those function who are immediately executed then called IIFE.


// kaee bar Golobal scope ke polution se problem hoti hai jo bhi global scope ke
// variable hai or polution hai usko remove karne ke liye IIFE use karte hai

(function IIFE() {
    console.log("IIFE"); // IIFE
})();



// IIFE by using arrow function
(() => {
    console.log("Arrow Function IIFE") //
})();



// named IIFE
(function test() {
    console.log("Arrow Function named IIFE") // Arrow Function named IIFE
})();



// Pass the parameter to the IIFE (Called Parameterized IIFE)
((name) => {
    console.log(`Arrow Function IIFE ${name}`) // arrow Function IIFE IMTIYAZ
})("IMTIYAZ");
