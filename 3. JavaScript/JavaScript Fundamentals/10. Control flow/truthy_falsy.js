
// truty and falsy value (v.v.i) <----- for inteview
// ==> Falsy_values ---> false, 0, -0, BigInt 0n, "", null, undefined, NaN, 
// ==> truty_values ---> {}, [], "0" 'false' or "false", " ", function(){} -> (called empty fun)


const userEmail = "imtiyaz@Google.com";

if (userEmail) {
    console.log("Got the email"); // Got the email <-- maan liya gya hai true
} else {
    console.log("Don't have user email");
}



const userEmail1 = "";
if (userEmail1) {
    console.log("Got the email");
} else {
    console.log("Don't have user email"); // Don't have user email <-- maan liya gya hai false hai
}


const userEmail2 = [];
if (userEmail2) {
    console.log("Got the email"); // Got the email <---- maan liya gya hai true hai
} else {
    console.log("Don't have user email");
}


const userEmail3 = {};
if (userEmail2) {
    console.log("Got the email"); // Got the email <---- maan liya gya hai true hai
} else {
    console.log("Don't have user email");
}


// Example How to check
const usersEmail = [];
if (usersEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) { // Object.keys() <-- se ek array ka key ban kar aajata hai
    console.log("Empty Object");
}











