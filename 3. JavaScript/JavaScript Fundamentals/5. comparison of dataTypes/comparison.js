

// <==========> Comparison <===============>
console.log("2" > 1); // ==> true, strin "2" ko number mein convert kar diya javaScript
console.log(null > 0); // ==> false
console.log(null == 0); // ==> false
console.log(null >= 0); // ==> true , null ko javaScript zero(0) mein convert kar diya
console.log("null end  ======>")


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false
console.log(undefined === 0); // false

// Uper iss tarah ke compresion hum logo ko avoid karni chahiye


//==> stric check ===
console.log("4" === 4); // ==> false




//  How memory work in JavaScript:
// let myName = "imtiyaz";
// let anotherName = myName;
// anotherName = "developer";

// console.log(myName);
// console.log(anotherName);




let userOne = {
    email: "imtiyaz@google.ocm",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "imtiyazwipro@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);



