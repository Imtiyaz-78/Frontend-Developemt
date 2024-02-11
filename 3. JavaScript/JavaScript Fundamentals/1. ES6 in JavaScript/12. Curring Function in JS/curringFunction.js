

// Curring Function in JS

// 1. 1st understand Noraml Function
function addition(a, b, c) {
    return a + b + c;
}
let result = addition(2, 3, 4);
// console.log(result);


// 2. Curring 
function Add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let first = Add(4);
let second = first(6);
let third = second(10);
// console.log(third);  // 20 <---- same result 

// above calling function and passing argument not best approach see below best approach 
let bestApproach = Add(4)(6)(10)
console.log(bestApproach); // 20 <---- same result 




// Let's create real use case for currying
let Student = {
    name: "imtiyaz",
    age: 24
}

function getUserInfo(obj) {
    return function (userInfo) {
        return obj[userInfo]
    }
}
let getResult = getUserInfo(Student);
console.log(getResult("name"));   // imtiyaz
console.log(getResult("age"));    // 24


// by curring (same result)
let userName = getUserInfo(Student)("name");
console.log(userName);