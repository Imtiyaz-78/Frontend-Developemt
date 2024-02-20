


function add(a, b) {
    return a + b
}

function divide(a, b) {
    return a / b
}

function calculate(num1, num2, callbak){
     return callbak(num1, num2) 
}


console.log(calculate(4 , 2, add));    // 6
console.log(calculate(4 , 2, divide)); // 2