
const user = {
    username: "imtiyaz",
    loginCount: 8,
    singedIn: true,

    getuserdetails: function () {
        // console.log("Got user details from databse ");
        console.log(`username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getuserdetails());


// new user() <--- this is constructor function 
// Ex:

function Student(name, rollNo, SutdID){
    this.name = name;
    this.rollNo = rollNo;
    this.SutdID = SutdID;

    return this // ye return likhe ya nhi likhe ye implicitly return this default work karta hi hai.

}
// const StudentOne = Student("Imtiyaz", 123, 786)
// const StudentTwo = Student("mustak", 4565, 780)
// console.log(StudentOne);
//console.log(StudentTwo); // <--isse karne se StudentOne ki sari value ko override kar diya dangerous


// constructor function har baar aapko ek new instances de deta hai or ek new copy de deta hai, uss copy ke sath aap jo bhi khelo ya jo bhi kro original or dusre usse koee efect nhi hote hai upper wale code se same instance create ho raha toh problem bhai then see new example 

const StudentOnee = new Student("Imtiyaz", 123, 786)
const StudentTwoo = new Student("mustak", 4565, 780)
console.log(StudentOnee);
console.log(StudentTwoo);

// uper ke code mein new keyword lagane se memroy haar baar new space or unique addres mil raha hai.
// har object or variable ko new copy mil raha hai menas new address memory mein.




