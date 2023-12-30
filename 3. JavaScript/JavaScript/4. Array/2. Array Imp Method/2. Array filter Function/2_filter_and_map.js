
// node 2_filter_and_map.js

let arr = [2, 5, 40, 50, 17, 49, 58]
let result = arr.filter(v => v % 2 == 0).map(v => v * v);
console.log(result); // output --> [ 4, 1600, 2500, 3364 ]