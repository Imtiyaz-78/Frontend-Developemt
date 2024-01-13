

// if

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("Yes User is logged in!");
// }
// else {
//     console.log("User is not logged In");
// }


// <, >, <=, >=, ==, !=, ===, !==

// if(2 == '2'){
//     console.log("executed"); // executed
// }

// === (also called stickly check operator)

// if (2 === '2') { // ye line se false statement hai toh control if ke body mein enter hi nhi karega 
//     console.log("executed"); // executed
// }


// impresed code but nhi likhna chahiye
const balance = 1000;
// if(balance>500) console.log("yes balance is greter"), console.log("greater");//bad way to write code


/*
if (balance < 500) {
    console.log("balance is less than 500");
}
else if (balance < 750) {
    console.log("balance is less than 750")
} else if (balance < 900) {
    console.log("balance is less than 900")
} else {
    console.log("balance is less than 1200") // balance is less than 1200 <-- This line will be execute
}
*/



/*
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}
*/



/*
const LoggedInFromGoogle = false;
const LoggedInFromGmail = true;

if (LoggedInFromGoogle || LoggedInFromGmail){
    console.log("user Logged in ");
}
*/


const month = 5;
switch (month) {
    case 1:
        console.log("january");
        break;

    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5: // break keyword control flow ko break kar deta wahi se return ho jata hai
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Octaber");
        break;

    case 11:
        console.log("November");
        break;
    case 12:
        console.log("Decemeber");
        break;

    default:
        console.log("Please enetr valid input");
        break;
}



// 


const nameByMonth = "May";
switch (nameByMonth) {
    case "January":
        console.log("january");
        break;

    case "February":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    case "May": // break keyword control flow ko break kar deta wahi se return ho jata hai
        console.log("May");
        break;
    case "June":
        console.log("June");
        break;
    case "july":
        console.log("july");
        break;
    case "August":
        console.log("August");
        break;
    case "September":
        console.log("September");
        break;
    case "Octaber":
        console.log("Octaber");
        break;

    case "November":
        console.log("November");
        break;
    case "Decemeber":
        console.log("Decemeber");
        break;

    default:
        console.log("Please enetr valid month");
        break;
}


// Nullish Coalescing Operator (??): null undefined 

let val1;
val1 = 5 ?? 10
// console.log(val1); // 5

let val2;
val2 = null ?? 10
console.log(val1); // 10


val1 = undefined ?? 10 // 10
val1 = null ?? 10 ?? 20 // 10

/* ==> Nullish coalescind operator ka hum use karte hai tab jab suppose jab koee response
       database or API or firebase se aarahi ho and responce mein two value aati hai ya null
       or undefined (aaya hi nahi responce) return aati hai tab uss case mein hamara pra code structure
       presan ho sakta hai toh uss case mein value null hai null assign kar do ya warna undefined hai toh undefined assign kardo nhi toh warna koee value aaarhai hai toh value assign kardo to uss special case ke liye ye operator banaya gya hai.

*/



// ===> Ternary Operator:
// syntax --> condition ? true : false

// Ex:
let amount = 10;
amount >= 5 ? console.log('greater than 10 or eaul ') : console.log("Less than 10")
