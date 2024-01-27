
/*
// Ways of declare the object:
// 1st way: 
const obj1 = new Object({
    name:"xyz"
})

// 2nd way:
const obj2 = new obj();

// 3rd way:
const obj={
    name "developer"
}
*/



const obj1 = {
    name: "imtiyaz",
    getName: function () {
        return this.name
    },
    getRoll: function () {
        return this.rollNo
    }

}

const obj2 = {
    rollNo: 1,
    name: "Mohammad",
    __proto__: obj1
}

console.log(obj2);
console.log(obj2.getRoll()); // 1
console.log(obj2.getName()); // Mohammad


const obj3 = {
    class: "B.Tech",
    __proto__: obj2  // <--- called prototype Inheritance
}

console.log(obj3.getName()); // Mohammad




// <=====================> Now we understand by array prototype <==================>
const arr = ["Imtiyaz"];
console.log(arr); // we can access all the array prototype means all propertie or function using dot

const array = new Array()
console.log(array);


const fun = new function () {

}
console.log(fun);


/*
==> kisi bhi function or method ka logic kaise likha gya hoga use polyfill bolte hai.
    khud ka polyfill kaise likhte hai Let's see below example

*/


Array.prototype.show = function () { // Khud ka property or function kaise create karte hai 
    return this //  means array hi return kardo
}
const cities = ["Noida"]
console.log(cities.show());


// ===> How to convert above array into object khud se create kijiye function

Array.prototype.convertIntoObject = function () {
    let newObj = {}
    this.forEach(element => {
        newObj[element] = element;
    });

    return newObj;
}

console.log(cities.convertIntoObject());



// Khud ka prototype kaise banate hai see below code:
function MyPrototype(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

MyPrototype.prototype = obj1 // Another way to inherit
const myProto = new MyPrototype("Priyanka", "78");
console.log(myProto.getRoll());



