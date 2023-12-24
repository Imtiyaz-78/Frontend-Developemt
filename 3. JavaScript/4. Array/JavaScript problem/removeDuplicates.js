
//  node removeDuplicates.js

const arr = ["hello", "coder", "programmer", "hello", "coder"]


function remove(data){
    return data.filter((value , index) => data.indexOf(value) === index);
}

console.log(remove(arr));