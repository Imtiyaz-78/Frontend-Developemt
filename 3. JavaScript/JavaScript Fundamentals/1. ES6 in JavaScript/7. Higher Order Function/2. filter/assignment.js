
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
// print those company which are service base comapny by filter method 
let result = companies.filter(function (company) {
    if (company.category == 'Service Based') {
        return true;
    }
    else {
    }
});
console.log(result);
*/


/*
// 2nd Method 
// print those company which are service base comapny by filter method 
let result1 = companies.filter((company) => {
    if (company.category === 'Service Based') {
        return true;
    }
    else {
    }
});
console.log(result);
*/

// Best Approach
const bestWay = companies.filter(company => company.category === 'Service Based')
console.log(bestWay);


// OR more approach 
console.log(companies.filter(company => company.category === 'Service Based')); 