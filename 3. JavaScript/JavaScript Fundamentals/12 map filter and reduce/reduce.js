

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


// one more another way using arrow function:
const resultArr = arr.reduce((acc, curr) => acc + curr, 0);
const resultarr1 = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log(`reduce method using arrow fun on single line ==> ${resultArr}`);
console.log(`reduce method using arrow function ==> ${resultarr1}`);



let array = [10, 20, 30]
var result = 0
// for (let i = 0; i < array.length; i++) {
//     result = result + array[i]

// }
let anss = array.forEach((num) => {
    result += num
})
console.log('The total number is ' + result)

// console.log(typeof result, result);



// Let's see one more example:

const mobileCard = [
    {
        brand: "Samsung",
        model: "Galaxy S21",
        price: 950,
        color: "Black",
    },
    {
        brand: "Apple",
        model: "Iphone 13 Pro Max",
        price: 1400,
        color: "Space Gray",

    },
    {
        brand: "Huawei",
        model: "P40 Pro",
        price: 780,
        color: "Blue",

    },
    {
        brand: "Oppo",
        model: "Find X2",
        price: 650,
        color: "White & Black",

    },
    {
        brand: "Vivo",
        model: "X60 Pro+",
        price: 8000,
        color: "Green"
    }
]

const cardResult = mobileCard.reduce((acc, items) => acc + items.price, 0);
console.log(`Total price of Mobile : ₹${cardResult}`); // Total price of Mobile : ₹11780

// other way of array:
const cardResult1 = mobileCard.reduce((acc, items) => {
    return acc + items.price;
}, 0);

console.log(`Rupess ==> ${cardResult1}`); // Rupess ==> 11780



