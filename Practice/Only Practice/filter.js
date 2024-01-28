const arr = [10, 2, 3, 4, 200]

const result = arr.filter((value, index, arr) => {
 return value % 2 == 1;

})

console.log(result);