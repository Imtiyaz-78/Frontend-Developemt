
// node 2_getYearGetMonthGetDay.js

var date = new Date();
var year = date.getFullYear();
console.log(year);
var month = date.getMonth();
//will start from 0 
console.log(month);
var monthList = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = monthList[date.getMonth()];
console.log(currentMonth);
var day = date.getDay();
console.log(day);
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
var currentDay = dayList[day];
console.log(currentDay);
var result = currentDay + " " + currentMonth + " " + year;
console.log(result);