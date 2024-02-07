
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
// 1. By Normal Standard For Loop 
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
    console.log(companies[i].name);
}
*/

/*
// forEach
companies.forEach(function (value, index) {
    console.log(value);          // <--- same as tis console.log(companies[i]);
    console.log(value.name);     // just for loop ki i index ko console kar raha hai
})
*/


// forEcah by arrow function 
companies.forEach((company) => {
    console.log(`Company Name : ${company.name}`);
});
console.log(" ===================>");


// forEcah by arrow function at single Line 
companies.forEach((company) => (console.log(company.name)));

























