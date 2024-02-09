
const alphabet = ['d', 'f', 'e', 'n', 'a', 't'];

// 1st way for sort:
// alphabet.sort()
// console.log(alphabet); // [ 'a', 'd', 'e', 'f', 'n', 't' ]



// 2nd way for sort
const result = alphabet.sort((a, b) => {
    if (a > b) {
        return 1
    }

    if (a < b) {
        return -1;
    }
    return 0;
})

console.log(result);

