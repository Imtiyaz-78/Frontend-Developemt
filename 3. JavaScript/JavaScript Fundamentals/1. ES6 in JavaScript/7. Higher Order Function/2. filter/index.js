let companies = [
    { name: "Google", category: "Product Based", start: 1981, End: 2004 },
    { name: "Amazon", category: "Product Based", start: 1992, End: 2008 },
    { name: "Paytm", category: "Product Based", start: 1999, End: 2007 },
    { name: "Adobe", category: "Product Based", start: 1975, End: 2006 },
    { name: "Microsft", category: "Product Based", start: 1965, End: 1986 },
    { name: "Tcs", category: "Service Based", start: 1965, End: 1986 },
    { name: "infosys", category: "Service Based", start: 1965, End: 1986 },
];


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


/*
// Find those person age whoose age is greater than 21 By using Normal standard for Loop
for (let i = 0; i < ages.length; i++) {
    // console.log(ages[i]);
    if (ages[i] > 21) {
        console.log(`Age geater than 54 : ${ages[i]}`);
    }
}
*/


/*
// Find those person age whoose age is greater than 21 By using filter() method
const result = ages.filter(function (age) {
    if (age >= 21) {
        return true
    } else {
        return false
    }
})

console.log(result);
*/


/*
// Find those person age whoose age is greater than 21 By using filter() arrow method
const result1 = ages.filter((age) => {
    if (age >= 21) {
        return true
    } else {
        return false
    }
})

console.log(result1);
*/


// Very Optimize wayf
// Find those person age whoose age is greater than 21 By using filter() arrow method at single line
let resultAge = ages.filter((age) => (age >= 21));
console.log(resultAge);


let resultAge1 = ages.filter(age => age >= 21);  /* single parameter the so extra bracket reomve
console.log(resultAge1);                          kar diye hai */


console.log(ages.filter((age) => (age >= 21)));
