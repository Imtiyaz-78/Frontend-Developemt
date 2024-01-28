

// Math.PI ki value 3.14... hoti hai mujhe use karni hai change like 5 karni hai change hot sakti hai toh kaise nhi ho sakti hai toh kaise


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor); /* {
                            value: 3.141592653589793,
                            writable: false,
                            enumerable: false,
                            configurable: false
                        }
                        */

// Math.PI ki value ko itni in_details hard coded kar rakhi hai c++ me ki aap change nhi kar sakte hai

// console.log(Math.PI);
// Math.PI = 5; // aese karne se override nhi huee PI ki value means change nhi huee 
// console.log(Math.PI);

// getOwnPropertyDescriptor <-- ye property object kuchh hidden chicj ke bare mein batati hai





// make own property 
let own = {
    name: "imtiyaz",
    price: 250,
    isAvalable: true
}


console.log(Object.getOwnPropertyDescriptor(own, "name"));

Object.defineProperty(own, 'name', {
    writable: false, // agar false kar diye then we can not change or upadte it.
    enumerable: false, // <-- means iterate karna 
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(own, "name"));



// defineProperty <--- Adds a property to an object, or modifies attributes of an existing property.
Object.defineProperty(own, 'name', { 
    name: "test"
})
own.name = "mohammad"
console.log(Object.getOwnPropertyDescriptor(own, "name"));



console.log("<========================>");
// How to iterate on object
const obj = {
    name: "imtiyaz",
    price: 250,
    isAvalable: true,

    oderPizza: function () {
        console.log("Pizza Ordered");
    }
}

for (const [key, value] of Object.entries(obj)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}




