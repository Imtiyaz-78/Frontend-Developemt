

// <===================> Array <========================>

// Array in JS: Array is object

// 1. Declaration and Initialization of an array:
let arr = [10, 20, 30];
var myArray = ["apples", "bananas", "oranges"];
let arr3 = new Array(1, 2, 3, 4, 5); // Array object

console.log("Declared & initialized array : ", arr); // Declared & initialized array :  [ 10, 20, 30 ]
// console.log(arr3); // [ 1, 2, 3, 4, 5 ]



// 2. Accessing elements in the array using index:
// 2. How to access 1st element of Array
// console.log(arr[0]) // O/P ==>  10 



// 3. How to Accessing nth elements in the array:
let lastElement = arr[arr.length - 1]
// console.log(lastElement); // O/P ==> 30



// <=============> Array Methods <==============>
const array = [10, 20, 40, 50]

// 1. The push() method is used to add one or more elements to the end of an array
array.push(78);
array.push(79);
// console.log(array);  // [ 10, 20, 40, 50, 78 ]


// 2. The push() method is used to remove elements to the end of an array.
// This method changes the length of the array.
array.pop()
// console.log(array); // [ 10, 20, 40, 50, 78 ]


//3. The unshift() method is used to add elements to the start(First) of an array
array.unshift(786)
// console.log(array); // [ 786, 10, 20, 40, 50, 78 ]


// 4. The shift() method is used to remove elements to the start(First) of an array
// And returns that removed element. This method changes the length of the array.
array.shift();
// console.log(array); // [ 10, 20, 40, 50, 78 ]



// 5. The concat() method of Array is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // ["a", "b", "c", "d", "e", "f"]
console.log(array1)  // ['a', 'b', 'c'];


// 6. The splice() method of Array changes the contents of an array by removing or replacing existing elements 
// splice() method of array is to add or remove the element in array.

// systex:

//7. splice(start_index_number, total_deleCount_number, items1, items2)
// splice(1, 2, "mago", "apple" )

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);  // ["Jan", "Feb", "March", "April", "May"]



// splice() method is also use to remove the element from the Array
// Systex:
// splice(starting_index_numbet, total_detele_item_number) ex: 

let fruits = ['apple', 'banana', 'mango', 'orange'];
fruits.splice(1, 1);
console.log(fruits); // [ 'apple', 'mango', 'orange' ] removed items --> 'banana'


// splice() method replce the exciting items 
const monthss = ['Jan', 'March', 'April', 'June'];
monthss.splice(1, 3, 'add');
console.log(monthss) // o/p: ["Jan", "add"]


// 7. The toSpliced() method of Array instances is the copying version of the splice() method. 
//    It returns a new array with some elements removed and/or replaced at a given index.

// Ex:
const toMonths = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = toMonths.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(toMonths); // ["Jan", "Mar", "Apr", "May"]


// 7. The sort() method of Array instances sorts the elements of an array.
//    And returns the reference to the same array.
//    The default sort order is ascending.
//    It does not change the original array.

const numArray = [9, 6, 8, 2, 7, 1];
numArray.sort();
console.log(numArray); // --> [ 1, 2, 6, 7, 8, 9 ]


// 7. The toSorted() method of Array instances is the copying version of the sort() method.
//  It returns a new array with the elements sorted in ascending order.
// To reverse the elements in an array without mutating the original array, use toSorted().
// EX:
const monthsArray = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = monthsArray.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(monthsArray); // ['Mar', 'Jan', 'Feb', 'Dec']



const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]


// 8. The reverse() method of Array instances reverses an array in place.
//    The reverse() method returns the reference to the same array. 
//    the first array element now becoming the last, and the last array element becoming the first.
// Ex 1:
const arrReverse = [5, 4, 3, 2, 1];
arrReverse.reverse();
console.log(arrReverse); // [ 1, 2, 3, 4, 5 ]

// Ex 2:
const arrayRev = ['one', 'two', 'three'];
console.log('array1:', arrayRev); // "array1:" Array ["one", "two", "three"]

const reversed = arrayRev.reverse();
console.log('reversed:', reversed); // "reversed:" ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('arrayRev:', arrayRev); // ["three", "two", "one"]



// 8. toReversed() method of Array is the copying counterpart of the reverse() method.
//    It returns a new array with the elements in reversed order.
//    A new array containing the elements in reversed order.
//    To reverse the elements in an array without mutating the original array, use toReversed().
//    toReversed() method doo't change in original array
// Ex:
const items = [1, 2, 3];
const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]



// 9. slice() method is use to extract tha part of array element.
//    The slice() method of Array returns a shallow copy of a portion of an array 
//    into a new array object selected from start to end (end not included)
//    where start and end represent the index of items in that array.
//    The original array will not be modified.
//    Negative index counts back from the end of the array 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let ansSlice = animals.slice(2);
console.log(ansSlice); // [ 'camel', 'duck', 'elephant' ]

console.log(animals);              // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2, 4)); // [ 'camel', 'duck' ]
console.log(animals.slice(1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals.slice(-2));   // ["duck", "elephant"]
console.log(animals.slice(2, -1));// ["camel", "duck"]
console.log(animals.slice());     // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]



// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.
// array.fill(value, startIndix(position), endIndex(position)) Ex: fill(10, 2, 6)

// It returns the modified array(V.V.I).
// Syntax: 
// fill(value) // Har jagah par ek hi value fill ho jayega
// fill(value, startIndexNo.)
// fill(value, startIndexNo., endIndexNo.)
// Ex: 

const fillFruits = ["Banana", "Orange", "Apple", "Mango"];
fillFruits.fill("Kiwi"); 
console.log(fillFruits); // ['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi'] -> sab index par kiwi fill ho gya


// Example:
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]





// <==============> Array se kuchh question puchhte hai <==============> 

// 1. includes(arg..) check karta hai element present hai ki nhi array
console.log(array.includes(40)); // o/p --> true, means 40 present hai


