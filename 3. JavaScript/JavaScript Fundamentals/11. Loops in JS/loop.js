
// Ctrl+Shift+L (multi cursor)

// <===============> Lopps/Iteration <=============>

/*
// ==> Types of Loops in JS:
       1. for loop
       2.
       3.




*/


// for loop
/*
for (let i = 0; i <= 20; i++) {
    const element = i;
    console.log(element);

}
console.log("<=========>");
*/



// 2 to 20 ka table 
for (let i = 1; i <= 20; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 20; j++) {
        // console.log(i + '*' + j + ' = ' + i * j);
    }

}




// break keyword
/*
const arr = [1, 2, 3, 4, 5, 6, 6, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i] == 100) {
        console.log(`Target value is: ${arr[i]}`);
        break;
    }
    else {
        console.log("Target value not paresnt in array");
        break;
    }
}
*/



// continue keyword example:
const arr = [10, 20, 30, 40, 50, 60, 70]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 30) {
        continue;
    }
    // console.log(`Value of array: ${arr[i]}`);
    // console.log(arr[i]);

}






// 2. while loop:

let i = 0;
let arr3 = [10, 20, 30, 40, 50, 60]
while (i < arr3.length) {
    // console.log(`The ${i} value of array is : ${arr3[i]}`);
    i++;
}



// 3. do while loop:
// 1st Ex:

// In do while loop atleast one time loop will excuted.
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);




// 2nd Ex:
let j = 0;
let arr4 = [10, 20, 30, 40, 50, 60, 70]
do {
    console.log(`The ${j} value of array index is : ${arr4[j]}`);
    j++;
} while (j < arr4.length);




/*
// How to print result in single line 
var result = "";
var arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (var i = 1; i < arr2.length; i++) {
    result = result + arr2[i] + " ";
}
console.log(typeof result, result)
*/







































