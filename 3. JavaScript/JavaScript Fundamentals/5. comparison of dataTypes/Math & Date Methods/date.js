

let mydate = new Date();
// console.log(mydate.toString()); // Thu Jan 04 2024 00:49:36 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()); // Thu Jan 04 2024
// console.log(mydate.toLocaleString()); // 4/1/2024, 12:49:36 am
// console.log(mydate.toLocaleDateString()); // 4/1/2024
// console.log(typeof mydate); // object


let myCreateddate = new Date(2023, 0, 23, 12, 54);
console.log(myCreateddate.toDateString()); // Mon Jan 23 2023
console.log(myCreateddate.toLocaleString()); // 23/1/2023, 12:54:00 am

let myCreateddate2 = new Date("2024-05-01");
console.log(myCreateddate2.toDateString()); // Wed May 01 2024
console.log(myCreateddate2.toLocaleString()); // 1/5/2024, 5:30:00 am