

// <=========> Scopes in JavaScript <===========>
// In JavaScript, a scope is the region of code that can be accessed by variables.
// There are three types of scopes: local, global and block scopes.

// 1. Local Scope:
//  When we declare a variable inside a block (like if statement), then it is called local scope.

if (true) {
    // let a = 10;
    // const b = 20;
    var c = 30;
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // output: 30 (accessable because var is global scope) 

// 2. Global Scope:
// If we declare a variable outside any function or block, then it becomes global scope Ex:

// var c1 = 300
let a1 = 50;
if (true) {
    let a1 = 10;
    const b1 = 20;
    var c1 = 30;
    console.log("Inner let value:", a1); // output is: Inner let value: 10
}

console.log(c1); // output is: 30 But why?
console.log(a1); // output is: 50


// Nested function:(Closure)
function one() {
    const username = "imtiyaz78";
    function two() {
        const website = "Facebook";
        console.log(`Username from nested function: ${username}`);
    }
    // console.log(website);  // ReferenceError: website is not defined
    two(); // output:  Username from nested function: imtiyaz78
}

one();


// Agar above code ke function two to comment kar dengey toh funtion execute hi hoga