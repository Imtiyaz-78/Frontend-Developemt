
// What is differenece between map or forEach:
/*
   1.  Map returns a new array 
   2. while forEach return undefined see given example
   3. reduce method work with map() method but not work with forEach() loop see EX. 2nd 
*/

let arr = [1, 2, 3, 4, 5, 6];

// 1st example: using map() method
let resultArr = arr.map((items) => {
    return items * items;
})
console.log(resultArr); // [ 1, 4, 9, 16, 25, 36 ]


// 1st example: using forEach() method
let resultforEach = arr.forEach((items) => {
    return items * items;
})
console.log(resultforEach); // undefined



// 2nd example: using map() method:
let secondExmp = arr.map((items) => {
    return items * items;
}).reduce((x, y) => {
    return x + y;
})
console.log(secondExmp); // 91


// 2nd example: using forEach() method:
let secondExmpUsingForEach = arr.forEach((items) => {
    return items * items;
}).reduce((x, y) => {
    return x + y;
})
console.log(secondExmpUsingForEach); // TypeError: Cannot read properties of undefined (reading 'reduce')