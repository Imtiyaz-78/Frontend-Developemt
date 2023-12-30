
// node every.js

// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array


let arr = [10, 6, 20, 70, 15]
let ans = arr.every(function (age) {
    return age > 20;
})

console.log(ans);