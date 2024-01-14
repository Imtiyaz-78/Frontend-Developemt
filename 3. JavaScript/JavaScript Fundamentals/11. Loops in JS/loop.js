
// Ctrl+Shift+L

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


const arr = [10, 20, 30, 40, 50, 60, 70]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 30) {
        continue;
    }
    result = arr[i] +
        // console.log(`Value of array: ${arr[i]}`);
        console.log(arr[i]);

}



// 2. while loop




/*
// How to print result in single line 
var result = "";
var arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (var i = 1; i < arr2.length; i++) {
    result = result + arr2[i] + " ";
}
console.log(typeof result, result)
*/







































