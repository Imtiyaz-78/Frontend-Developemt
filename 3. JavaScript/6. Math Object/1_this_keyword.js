
// node 1_this_keyword.js

/*
  1. In JavaScript, the this keyword refers to an object.
  2. Alone, this refers to the global object.
  3. this is not a variable. It is a keyword. You cannot change the value of this.


*/
var employee = {
    fullName: "salman",
    age: 44,
    location: "bangalore",

    display() {
        console.log(this);
        return this.fullName;
    },
    addition(a, b) {
        this.result = a + b;
        return a + b;
    }
}
console.log(employee.display());
console.log(employee.addition(22, 33));
console.log(employee);


// 2nd Method
const person = {
    firstName: "Imtiyaz",
    lastName: "Ahmad",
    age: 22,
    id: 5566,

    fullName: function () { // or only FullName(){}
        return this.firstName + " " + this.lastName;
    },

    addition: function (a, b) {
        this.result = a + b;
        return a + b;

    }
};

console.log(person.fullName());
console.log(person.addition(22, 33));
console.log(person);


// output 
/*

Imtiyaz Ahmad
55
{
  firstName: 'Imtiyaz',
  lastName: 'Ahmad',
  age: 22,
  id: 5566,
  fullName: [Function: fullName],
  addition: [Function: addition],
  result: 55
}


*/
