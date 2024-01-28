


// <=========> map, reduce and filte <===============>

// 1. filter: The filter method calls the predicate function one time for each element in the array.
// 1. The filter() array method is an iterative method.
// 2. JavaScript Array filter() Method is used to create a new array from a given array
// 3. filter() method accept callbackfun at its parameters.

// filter() method Returns the elements of an array that meet the condition specified in a callback function.

// calbackfun: A function to execute for each element in the array.


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numArr.filter((num) => {
    return num % 2 == 0; // for even number
    // return num % 2 == 1; // for odd number
})

// console.log(even);
// console.log(numArr); // they original array

// ya in one line 
const even1 = numArr.filter((num) => num > 6)
// console.log(even1);


/*
// one more other way
let newArray = []
numArr.forEach((num) => {
    if (num % 2 == 0) {
        newArray = [...newArray, `Even --> ${num}`]
    }
})
console.log(newArray);
*/


/*
// also one more other way:
let resultArr = []
numArr.forEach((num) => {
    if (num > 7) {
        resultArr.push(num)
    }
})
console.log(resultArr); // [ 8, 9, 10 ]
*/



// <==============> Let's more play with object and filter out <=================>

let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

// Question:
// 1st: filter those person whoose name is Anna and occupation is programmer.
// 2nd: filter thorse person whose occupation is a teacher and age is 81.



// 1st ans: filter those person whoose name is Anna and occupation is programmer.
const sample = users.filter((items) => {
    return (items.occupation === 'programmer' && items.name === 'Anna')
})
console.log(sample);



// one other way 
let result = []
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Anna' && users[i].occupation === 'programmer') {
        result = [...result, users[i]];
    }
}
// console.log(result)



// 2nd: filter thorse person whose occupation is a teacher and age is 81.

let ans = users.filter((items) => {
    return (items.occupation === 'teacher' && items.age == 81)
})

console.log(ans);













