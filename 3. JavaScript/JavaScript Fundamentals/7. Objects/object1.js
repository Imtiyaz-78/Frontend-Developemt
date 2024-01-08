// (``) <=== back tick ko String Interpolation kahte hai

// <===========> Object in JavaScript <===========>
// singleton
// Object.create

// object Literals


// What is Object in JS:
// An object is a collection of properties. Each property consists of a name/value pair.


// There are two of declaring of Of object:
// 1st: Lete ki tarah 
// 2nd: Constructor ki tarah


// Object Literals (Literals means how to deaclare objects)


const mySym = Symbol("key1");

// 1. How to decalre Object:
const Employee = {
    name: "imtiyaz",
    age: 23,
    [mySym]: "myKey1",  // mysum: "myKey1" ye sahi syntax nhi hai iska retun type string hai symbol nhi
    Location: "Noida",
    email: "imtiyaz@wipro.com",
    "full name": "md imtiyaz",
    isLoggedin: false,
    LastLogindays: ["Monday", "Sunday"]

}
// mysum: "myKey1" ye sahi syntax nhi hai iska retun type string hai symbol nhi.
// agar hame as symbol use karna hoga object mein toh square bracket under likhna hoga.


// ==> How to acces object: ans--> using dot notation and Square [] (Barcket)
// 1st way:
console.log(Employee.name);

// 2nd ways: 
console.log(Employee["email"]);

// console.log(Employee.full name); // not possible to acces this using dot(.) 
// then we have to use square notation ([])
console.log(Employee["full name"]); // md imtiyaz
console.log(Employee[mySym]);



// How to change value of object:
Employee.email = "imtiyaz@google.com";
console.log(Employee);
// Object.freeze(Employee); // <== How to lock the object so that no one can change
Employee.email = "imtiyaz@microsfot.com";
console.log(Employee);




Employee.gettingOne = function(){
    console.log(`hello Js 1`);
}

Employee.gettingtwo = function(){
    console.log(`hello Js 2, ${this.name}`);
}

console.log(Employee.gettingOne());  // hello Js 1
console.log(Employee.gettingtwo());  // hello Js 2, imtiyaz









