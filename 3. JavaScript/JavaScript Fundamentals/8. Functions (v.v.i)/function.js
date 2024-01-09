

// <=================> Functions <==================> 

// Function Definition: when pass input at the time fun definition then call parameters.
function addTwoNumber(n1, n2) {
    console.log(n1 + n2);
}

addTwoNumber() // NaN --> if we not pass arguments then he give NaN error 
addTwoNumber(10, 20) // 30 // when pass the value at time of fun call then called argumentsFQA1`9o
addTwoNumber(3, "4") // 34
addTwoNumber(3, null) // 3


const result = addTwoNumber(10, 20);
console.log(result); // undefined but why?


// Best way:
function add(num1, num2) {
    // let result = num1 + num2;
    // return result;  OR
    return num1 + num2;
}

const correct = add(10, 50);
// console.log("Result", correct); // 60

// return value we can store in variable then they will give expected output



function LoginUserMessage(username) {
    if (username === undefined) { // or if(!username)
        console.log("Please Enter a username");
        return
    }
    return `${username} jsut looged in`
}

// console.log(LoginUserMessage("imtiyaz"));
// console.log(LoginUserMessage()); // undefined just logged in (null nahi aata hai be carefull inter)


// if i want to give default value suppose user not enter anything:
function LoginUserMessage1(username = "Boat") {
    if (username === undefined) { // or if(!username)
        console.log("Please Enter a username");
        return
    }
    return `${username} jsut looged in`
}

// console.log(LoginUserMessage1()); // Boat jsut looged in



// calculate card price infinite like ecommerce:
function calculateCartPrice(...num1) { // .rest operator: it store in container called rest operator
    return num1
}
console.log(calculateCartPrice(100, 200, 400)); // [100, 200, 400]


// Rest operator all value ko array mein bind or store kar deta hai
function calculateCartPrice1(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice1(300, 400, 500, 600, 700)); // [500, 600, 700], 300(val1), 400 val2


// How to pass object to function as a parameters:
const user = {
    username: "imtiyaz1234",
    price: 3000
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // username is imtiyaz1234 and price is 3000
// or we can pass object directly
handleObject({
    username: "mumtaz",
    price: 8000
})



// Now How to pass array to function as a parameters:
const mynewArray = [10, 20, 30, 40];

function returnsecondValue(getArray){
    return getArray[1];
}
console.log(returnsecondValue(mynewArray));       // 20, OR below 
console.log(returnsecondValue([10, 20, 30, 40])); // 20 same output as upper


