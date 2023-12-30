
// node search.js

// JavaScript String search()

//search() searches a string for a value and returns the position of the first match

let text = "Mr Blue has blue house";
let position = text.search("Blue"); //output ---> 3 index return karta hai 
console.log(position);

// <------- serching four types----->
// String indexOf()
// String lastIndexOf()
// String startsWith()
// String endsWith()

//1.String indexOf()
let str = "Please locate where 'locate' occurs!";
let result = str.indexOf("locate"); 
console,log(result) //output ---> 7


//2.String lastIndexOf()