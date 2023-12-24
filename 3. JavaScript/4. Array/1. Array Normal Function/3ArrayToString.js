
//  node 3ArrayToString.js

// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

var list=["akash","rajesh","suresh",56,77];
console.log(list, typeof list);

var output = list.toString();  
console.log(output,typeof output); // output ----> akash,rajesh,suresh,56,77 string



//The join() method also joins all array elements into a string.
var list=["akash","rajesh","suresh",56,77];
var output = list.join(" ");
console.log(output,typeof output); // Output ----> akash rajesh suresh 56 77 string

