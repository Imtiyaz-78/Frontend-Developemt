

function add(a) {
    console.log("Hii Closure", a);
    var c = 5; // This is called lexical scope
    return function (b) {
        return a + b + c
    }
}

let sum = add(2);
console.log(sum(7)); // 14



