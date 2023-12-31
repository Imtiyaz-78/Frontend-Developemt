
// <============> dataTypes Summmary <=============>

// # Primitive dataType
// 7 types : String, Number, Boolean, null, undefined, Bigint, Symbol, 

// # Reference (Non primitives)
//  Array, Object Function

const arr = ["London", "US", "UK"];
let student = {
    name: "imtiyaz",
    roll: 786786,
    id: 2323,
    city: "Darbhanga"
}


const myFunction = function () {
    console.log("Hello JavaScript");
}


const score = 100;
const scoreValue = 100.78;


const isLoggedIn = true;
const outsideTemp = null;
let userEmail; // or let userEmail = undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false, Sysmbol ka use uniquely identify karne ke liye karte hai


