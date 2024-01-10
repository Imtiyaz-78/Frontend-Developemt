

// this keyword:
// this is keyword which is refere to current context.
// it's not present in arrow function, because arrow functions have their own this value.

// context menas value
// kabhi kabhi hum log bolte hai n movie ka context samjh mein hi nhi aaya menas kiss bare mein hai moview

const user = {
    username: "Imtiyaz",
    age: 25,
    gender: "Male",
    price: 786,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();  // Imtiyaz welcome to website
// user.username = "Mustak";
// user.welcomeMessage(); // Mustak welcome to website


// console.log(this); // {}
// browser ke under jo global object hai wo window hai this ke case mein
// and jab hum node enviroment ke under hai toh this refer empty obj. {} because abhi global mein koee
// context hi nhi hai 



function one() {
    let username = "Imtiyaz";
    console.log(this.username);
}
// one();   // undefined --> this keyword only work on object



// <===========> Arrow Function <======>
// one way
const get = function () {
    let username = "imtiyaz";
    console.log((this.username)); // undefined
}

// get()

// arrrow function

const get2 = () => {
    let a = 2;
    console.log("This is arrow function!"); // This is arrow function!
    console.log(this.a); // undefined 
    console.log(this); // {} // function ke bhi case mein empty object return karta hai 
}

// get2()


const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(20, 20)); // 40

// other to declare arrow function.
// arrow fun maan leta hai ki implicit aap return kar rahe hai

const addTwo1 = (num1, num2) => num1 + num2
// console.log(addTwo1(2, 2)); // 4

// or
const addTwo2 = (num1, num2) => (num1 + num2) // this most use in react
// console.log(addTwo2(2, 2)); // 4


const addTwo3 = (num1, num2) => ({ username: "Imtiyaz" }) // { username: 'Imtiyaz' }
console.log(addTwo3(2, 2)); // 4
// object ko return karnek ke liye {} ye bracket lagana parta hai









