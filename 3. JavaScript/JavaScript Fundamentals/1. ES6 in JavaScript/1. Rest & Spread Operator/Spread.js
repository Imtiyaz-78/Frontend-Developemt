

// Spread Oprerator:
const namesArr = ["imtiyaz", "mozakkir", "Razu"];

function getName(name1, name2, name3) {
    console.log(name1, name2, name3);
}

// Old way of passing argument to the function
getName(namesArr[0], namesArr[1], namesArr[2])    // imtiyaz mozakkir Razu

getName(...namesArr)// This is Best               // imtiyaz mozakkir Razu <--- same output
getName(namesArr)



// Spread ke case mein ye advantage rahta hai ki suppose functin ke parameter mein 3 paramater pass
// kiye hai and argument 2 hi pass kiye hai toh ye error nhi dega ki 3rd argumnet bhi pass kijiye

// Example below:
const arrNum = [10, 20, 50, 70]
function addNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
const result = addNumbers(...arrNum);
console.log(result);   // Output will be : 80



const arrTest = [10, 20, 50, 70, 80]
function addNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
// addNumbers(arrTest[0], arrTest[1], arrTest[2]);
addNumbers(arrTest)