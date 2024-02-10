
// reduce() method don't change in original array 


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// 1st way to find sum of total age
let sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
}
console.log(sumOfAges); // 460


// Now by reduce() method;
const totalAge = ages.reduce((total, age) => {
    return total + age;
}, 0)
console.log(totalAge); // 460



// Now more optimize 
const Sum = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(Sum); // same result as before: 460
