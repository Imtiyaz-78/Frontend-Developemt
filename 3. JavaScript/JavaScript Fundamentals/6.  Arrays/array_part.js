

// ===> Array ko marge karne ke three ways 
// 1st: By using push() method 
// 2nd: By using concat() method
// 3rd: By using spread operator
// 4th: By Uing flat() method

const arr1 = ["dubai", "nepal", "uk",];
const numArr = [1, 2, 3, 4, 5, 6,];

// arr1.push(numArr);
// console.log(arr1); // [ 'dubai', 'nepal', 'uk', [ 1, 2, 3, 4, 5, 6 ] ]
// problem kya huwa uper ki array ke under array aagya hai 

// acces of arr1 
// console.log(arr1[3]); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr1[3][0]); // 1 



console.log(arr1.concat(numArr)); // ['dubai', 'nepal', 'uk',  1, 2, 3, 4, 5, 6 ]


// concat() Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.
const concat_result = arr1.concat(numArr);
console.log(concat_result);  // [ 'dubai', 'nepal', 'uk', 1, 2, 3, 4, 5, 6 ]
console.log(arr1); // [ 'dubai', 'nepal', 'uk' ] <-- concat() method don't modified in original array 


// most usable in industry
// spread: spead means kaanch ka glass hai jameen par drop kar diye(foot gya) bikhar gya (spred ho gya)
console.log([...arr1, ...numArr]); // [ 'dubai', 'nepal', 'uk', 1, 2, 3, 4, 5, 6 ]


const flat_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const flat_result = flat_array.flat(Infinity);
console.log(flat_result);

// ouput of above code:
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9, 10,
//    11
//  ]


console.log((Array.isArray("imtiyaz "))); // return: false
console.log((Array.from("imtiyaz"))); // [ 'i', 'm', 't', 'i', 'y', 'a', 'z' ]
console.log((Array.from({ name: "imtiyaz" }))); // they retun empty obj --> interesting

// above Array.from({name:"imtiyaz"}) confuse ho gya kisko convert kru key or Value ko




// More another way to convert into array
// Ex:
// Returns a new array from a set of elements.
// A set of elements to include in the new array object.
const score1 = 400;
const score2 = 500;
const score3 = 600;
console.log(Array.of(score1, score2, score3)); // [ 400, 500, 600 ]


