

// node 7_12hourFormat.js

var date = new Date();
var hoursFormat = date.toLocaleTimeString();
console.log(hoursFormat);
var daysFormat = date.toLocaleDateString();
console.log(daysFormat);