

const objMethod1 = new Object();

const objMethod2 = new Object({
    name: "Imtiyaz",
    age: 24
})

const objMethod3 = {
    name: "Imtiyaz",
    age: 24
}


// Now Let's understand Protoype:
let Obj1 = {
    name: "Mohammad",
    age: 24,
    getName: function () {
        return this.name
    },

    getAge: function () {
        return this.age
    }
}


let Obj2 = {
    name: "Mustak",
    __proto__: Obj1
}


let Obj3 = {
    course: "B.Tech",
    __proto__: Obj2
}

// console.log(Obj3.age);
// console.log(Obj2.getName()); // See below output:  


//console.log(object12)<-- khud ka object property mil raha uske sath hidden prototype bhi mil rha h
/*
{name: 'Mohammad', age: 90}
    age: 90
    name: "Mohammad" 

[[Prototype]] : Object
    name: "Mohammad"
    [[Prototype]]: Object

*/

// <================================================>

// Array hai, object, fucntion or method sab kahan se drive ho rahe protoype se
// sab kya hai use kar rahe object [[Prototpe ]]

const array = new Array([]) // first way
const array2 = new Array() // 2nd way

const nameArr = ["imtiyaz", "mustak", "mumtaz"]; // 3rd way
console.log(nameArr);


// let's see prototype of arrray, object and function
const obj = new Object();
const arr = new Array();
const fun = new function () { }

// console.log(obj);
// console.log(arr);
// console.log(fun);


// How to create own Prototype or fucntion or method (called poly_fill) Like map(), forEach, reduce etc
Array.prototype.show = function () {
    return this;
}
const cities = ["Noida"]
console.log(cities.show());


// Making own method which will convert Array to object (V.V.I)
Array.prototype.convertIntoObject = function () {
    let newObj = {};
    this.forEach(items => {
        newObj[items] = items;
    })
    return newObj;
}

console.log(cities.convertIntoObject());


// Proper syntax to create own Prototype:
let ObjDemo = {
    name: "Mohammad",
    age: 24,
    getName: function () {
        return this.name
    },

    getAge: function () {
        return this.age
    }
}
function MyPrototype() {
    this.name = this.name;
}
MyPrototype.prototype = ObjDemo
const myproto = new MyPrototype("Mohammad");
console.log(myproto);




