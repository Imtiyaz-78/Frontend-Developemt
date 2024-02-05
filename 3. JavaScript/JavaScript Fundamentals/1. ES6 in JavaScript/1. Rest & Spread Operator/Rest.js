
// ES5 mein kaise use karte they rest operator
// Rest operator:

/*
function addNumber(a, b, c, ...otherValue) {
    console.log(arguments); // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60}
    console.log(arguments[0]); // 10
    return a + b + c
}

const ES5 = addNumber(10, 20, 30, 40, 50, 60);
console.log(ES5); // 60
*/


// ES6 mein:
// The rest operator is used to put the rest of some specific values into a JavaScript array.
// Example of Rest Operator:


function addNumber(a, b, c, ...restValue) {
    console.log(restValue); // [ 4, 5, 6, 7, 8 ]
    return a + b + c
}

const result2 = addNumber(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result2); // 6





