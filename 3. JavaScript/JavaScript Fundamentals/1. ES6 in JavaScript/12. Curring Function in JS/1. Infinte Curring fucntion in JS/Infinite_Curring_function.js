
// Infinite Curring function in javascript


function Add(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return a + b + c + d + e + f;
                    }
                }
            }
        }
    }
}
// console.log(Add(1)(2)(3)(4)(5)(6)); // 21

// above function mein agar infinte run karna hoga toh bahut hectik kaam hai so let's below exam..


// Infinite Curring function 
function Sum(a) {   // 3, 6, 10, 15, 21 
    return function (b) {
        if (b) {
            return Sum(a + b);
        }
        return a;
    }
}
console.log(Sum(1)(2)(3)(4)(5)(6)()); // 21
console.log(Sum(1)(2)(3)(4)(5)(6)(7)(8)()); // 36