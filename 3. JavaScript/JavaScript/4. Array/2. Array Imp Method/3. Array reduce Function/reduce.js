

//   node reduce.js

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.


let arr1 = [175, 60, 40];
let ans = arr1.reduce(function (total, num) {
    return total - num;
});

console.log(ans); // output ---> 75  Explanation:- (175 - 60 = 115,  115 - 40 = 75) 






let arr = [4, 5, 8, 66, 23, 10];
var result = arr.reduce(function (a, b) {
    return a > b ? a : b;
})
console.log(result); // output ----> 66