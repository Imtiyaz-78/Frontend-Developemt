


let sum = 0;
const calc = (num) => {
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
}
console.time();
console.log(calc(6));  // 15
console.timeEnd();


/*  ye uper wale fucntion bahut time leta hai, if baar baar ek function ko
    call karte hai toh, so isko optimize karne ke liye ham cache mein store 
    kar lengey and same request agar again aaye toh cache se return karwa  
    denge isse hamare application ka performance bahut fast ho jayega   

    if same reuqest dubara aaye toh mera functin again n chaley chale, usey cache se utha kar de dey
*/

// Efficent fucntion or memorize fucntion see below:

let sum1 = 0;
const calcu = (n) => {
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}


const memorizeFun = (fun) => {
    let cache = {};
    return function (...args) {
        console.log(args);
        let n = args[0];
        if (n in cache) {
            console.log("from cache");
            console.log(cache);
            return cache[n];
        }
        else {
            console.log("calculating first time");
            let result = fun(...args);
            cache[n] = result;
            return result;
        }
    }
}
console.time()
const Efficent = memorizeFun(calcu);
console.log(Efficent(6)); 
console.timeEnd();


console.time()
console.log(Efficent(6)); 
console.timeEnd();
