
// ===> How to merge Two array or more array
// 1st Example See below
const arr1 = [20, 30, 4, 50, 6];
const arr2 = [1, 2, 3, 4, 5, 6,];
console.log([...arr1, ...arr2]);

// Output below:
/*
[
  20, 30, 4, 50, 6,
   1,  2, 3,  4, 5,
   6
]
*/

// 2nd Example see below:
const array1 = [20, 30, 4, 0, 50, 6];
const array2 = [1, 2, 3, 4, 5, 6,];
const array3 = [1, 2, 3, 4, 5, 6,];
console.log([...array1, ...array2, ...array3])

// Ouput:   
/*
[
  20, 30, 4, 0, 50, 6, 1,
  2,  3, 4, 5,  6, 1, 2,
  3,  4, 5, 6
]
*/


// ===> How to merge two or more object:
// 1st way see below:
let job = {
    jobTitle: 'JavaScript Developer',
    Package: '3LPA'
};

let location = {
    city: 'London',
    country: 'England'
};

let remoteJob = {
    ...job,
    ...location
};

console.log(remoteJob);

// ouput below:
/*
{
  JobTitle: 'JavaScript Developer',
  Package: '3LPA',
  city: 'London',
  country: 'England'
}
*/



// ==> 2nd ways to combine two or more object:
//     Merge objects using Object.assign() method
let job1 = {
    jobTitle: 'JavaScript Developer',
    Package: '3LPA'
};

let location1 = {
    city: 'London',
    country: 'England'
};

let employee = Object.assign(job1, location1);
console.log(employee);

// ouput below:
/*
{
  jobTitle: 'JavaScript Developer',
  Package: '3LPA',
  city: 'London',
  country: 'England'
}
*/



