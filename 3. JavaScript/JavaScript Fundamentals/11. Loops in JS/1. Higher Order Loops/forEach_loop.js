

// forEach lopp:
// forEach calls the callbackfn function one time for each element in the array.
// forEach loop accept callback function
// callbackFun --> 1st aesa function jiska koee name nhi hota hai called callback function


const coding = ["js", "java", "react", "Cpp", "ruby", "javaScript"]

// 1st way syntax for forEach loop :
coding.forEach(function add(items) { // We may or may not write the name of the function.
    // console.log(items);
})
console.log(`1st way Synntax ========>`);

// 2nd way syntax for forEach loop:
coding.forEach(function (items) { // We may or may not write the name of the function.
    // console.log(items);
})
console.log(`2nd way Synntax ========>`);


// 3nd way syntax for forEach loop:
coding.forEach((items) => {
    // console.log(items);
})
console.log(`3rd way Synntax ========>`);


// 4th way syntax for forEach loop:
function print(items) {
    // console.log(items);
}
coding.forEach(print) // function ka refernce de rahe hai excecute nhi karna hai function menas call 



// forEach loop ke pass 3 parameter accept karne access hota 
// 1. item
// 2. index_numer
// 3. array (all array ki puri list aati hai) 

// Let's see below example:

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})



const myCoding = [
    {
        LanguageName: "JavaScript",
        LanguageFileName: "JS"

    },
    {
        LanguageName: "JAVA",
        LanguageFileName: "java"

    },

    {
        LanguageName: "Python",
        LanguageFileName: "py"

    }
]

myCoding.forEach((items,) => {
    console.log(items.LanguageName);
})











