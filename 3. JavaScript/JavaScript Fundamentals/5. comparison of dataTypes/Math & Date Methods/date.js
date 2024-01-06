

let mydate = new Date();
// console.log(mydate.toString()); // Thu Jan 04 2024 00:49:36 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()); // Thu Jan 04 2024
// console.log(mydate.toLocaleString()); // 4/1/2024, 12:49:36 am
// console.log(mydate.toLocaleDateString()); // 4/1/2024
// console.log(typeof mydate); // object


let myCreateddate = new Date(2023, 0, 23, 12, 54);
// console.log(myCreateddate.toDateString()); // Mon Jan 23 2023
// console.log(myCreateddate.toLocaleString()); // 23/1/2023, 12:54:00 am

let myCreateddate2 = new Date("2024-05-01");
// console.log(myCreateddate2.toDateString()); // Wed May 01 2024
// console.log(myCreateddate2.toLocaleString()); // 1/5/2024, 5:30:00 am


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateddate2.getTime()); // ouput is in mili second 1714521600000
// console.log(Math.floor(Date.now() / 1000)); // This line converted mili secodn to second 1704533933


let newDate = new Date();
console.log(newDate.getMonth() + 1); // 1 means January or (getMonth + 1)
console.log(newDate.getDay()); // 6 (January)
console.log(newDate.getHours()); // 15 (means 3:17)
console.log(newDate.getFullYear()); // 2024




// very important: we can customize this by itSelf
newDate.toLocaleString('dafault', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
})
console.log(newDate); // 2024-01-06T09:57:24.701Z 





