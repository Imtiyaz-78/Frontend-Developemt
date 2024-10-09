
// What is diffrence between map() vs forEach function
// map() return array but forEach return undefined

/*
map() ==> In JavaScript, the map() method is a built-in function for arrays that return or creates a new array 
          It doesn’t modify the original array but instead returns a new one.

*/
const arr = [1, 2, 3, 4, 5, 6];
const resultWithMap = arr.map((item) => {
    return item * item;
})
console.log(resultWithMap); // [1, 4, 9, 16]

let resultWithForEach = arr.forEach((items) => {
    console.log(items * items);
})
console.log(resultWithForEach); // undefined