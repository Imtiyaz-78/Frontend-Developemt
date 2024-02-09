
let companies = [
    { name: "Google", category: "Product Based", start: 1981, End: 2004 },
    { name: "Amazon", category: "Product Based", start: 1992, End: 2008 },
    { name: "Paytm", category: "Product Based", start: 1999, End: 2007 },
    { name: "Adobe", category: "Product Based", start: 1975, End: 2006 },
    { name: "Microsft", category: "Product Based", start: 1967, End: 1986 },
    { name: "Tcs", category: "Service Based", start: 1965, End: 1986 },
    { name: "infosys", category: "Service Based", start: 1966, End: 1986 },
];



// Sorting an Array of Objects based on year property using Noraml function
// sort() method: sort() method change the original array and returns a reference to the same array.
const result = companies.sort(function (company1, company2) {
    if (company1.start > company2.start) {  // In ascending Order
        return 1;
    } else {
        return -1;
    }
})
console.log(`Sorted Companies by Start Year in Ascending order:`, result);
console.log(`Original Company:`, companies);


// Sorting an Array of Objects based on 'year' property using arrow function
const sorted = companies.sort((a, b) => (a.start < b.start ? 1 : -1));
console.log(sorted);




// 2nd Example: 
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const age = ages.sort((a, b) => {
    return a - b; // for ascending order | and for discending order return a - b;

})
console.log(age);