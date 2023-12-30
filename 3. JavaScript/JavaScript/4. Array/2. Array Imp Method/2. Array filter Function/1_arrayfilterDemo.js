
// node 1_arrayfilterDemo.js

// ------> Impotant
// 1-----> filter Return boolean value (interview question)

// 2 ----> filter array mein filter kar ke element deta hai and true or false return kakrke array mein return karta hai 

// 3 ----->  Map ek ek element pr traverse karke element deta hai 

let arr = [2, 9, 18, 32, 74, 57, 53, 58];
let even = arr.filter(function (v, i) {
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }   
})


console.log(even); // output ---> [ 2, 18, 32, 74, 58 ]



// odd ke liye
let odd = arr.filter(v => v % 2 == 1)
console.log(odd); // output --> [ 9, 57, 53 ]

let v2 = arr.map(v => v % 2 == 1); 
console.log(v2); 

/* output --->
[
    false, true,
    false, false,
    false, true,
    true,  false
  ]

*/
