

// node find.js

/*
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.
*/


let ages = [20, 10, 30, 40, 70];
let result = ages.find(function (age) {
    return age >= 40;
})

console.log(result) // output ---> 40


// 2nd Example

var countryList = ["usa", "china", "india", "germany", "france", "india"];

var result2 = countryList.find(function (input, index) {
    return input === "india";
});
console.log(result); //output ---> india
