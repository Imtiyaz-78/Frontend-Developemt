

// reduce() method

// 1. arr.reduce() method in JavaScript is used to reduce the array to a single value.
// 2. The reduce() method reduces the given array into a single value by executing a reduce() method.
// 3. The user implements the reducer function that works on every element present in the array.


// Let's see through the example:

const arr = [1, 2, 3]

const arrTotal = arr.reduce(function (accumulator, currentValue) {
    // console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0) // initialValue

// console.log(`Total sum of value of array: ${arrTotal}`);


/* output:

accumulator: 0 and currentValue: 1
accumulator: 1 and currentValue: 2
accumulator: 3 and currentValue: 3
Total sum of value of array: 6
*/


let array = [10, 20, 30]
var result = 0
// for (let i = 0; i < array.length; i++) {
//     result = result + array[i]

// }
let anss = array.forEach((num)=>{
    result += num
})
console.log('The total number is '+result)

// console.log(typeof result, result);
