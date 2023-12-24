
// node 10concate.js

var cities = ['delhi','mumbai'];
var citiesTwo = ['chennai','bangalore'];
var citiesThree = ['kolkata', 'Noida']

var result = cities.concat(citiesTwo); // output ---> [ 'delhi', 'mumbai', 'chennai', 'bangalore' ]
console.log(result);

var result2 = cities.concat(citiesTwo, citiesThree);
console.log(result2); // output --> [ 'delhi', 'mumbai', 'chennai', 'bangalore', 'kolkata', 'Noida' ]