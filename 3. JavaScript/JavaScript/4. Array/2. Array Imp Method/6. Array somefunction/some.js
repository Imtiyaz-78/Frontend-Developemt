

// node some.js

// Definition and Usage
// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.


// some function return true or flase 
let age = [3, 10, 18, 20];
let result = age.some(function (input) {
    return input >= 3;
})

console.log(result) // output ---> true