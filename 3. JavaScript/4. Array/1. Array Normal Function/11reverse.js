

// node 11reverse.js

var list = ["india", "usa", "france", "germany"];
var result = list.reverse();
console.log(result); // Output -----> Final result [ 'germany', 'france', 'usa', 'india' ]

//2
var list = ["india", "usa", "china", "russia", "france"];
var result = list.indexOf("germany"); // return -1
console.log(result);

//3.
var list = ["india", "usa", "china", "russia", "france"];
var result = list.includes("japan"); // this return true or false
console.log(result);