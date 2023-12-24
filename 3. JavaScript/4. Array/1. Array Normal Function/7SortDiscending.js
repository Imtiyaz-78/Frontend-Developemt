

// node 7SortDiscending.js


var list =[10, 9, 8, 7, 6,];
var result = list.sort(function(a, b){
     return b - a;
});

console.log("Sorted array",result); // output ----> Sorted array [ 10, 9, 8, 7, 6 ] 