
// node 6SortAscending.js


var list =[10, 9, 8, 7, 6,];
var result = list.sort(function(a, b){
     return a - b;
});

console.log("Sortted array",result); // output ----> sortted array [ 6, 7, 8, 9, 10 ] 