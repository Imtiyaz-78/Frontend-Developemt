
// bind() function sam as tis the call() function but only 
// difference keep copy the of function, and call or invoking it later 


/* bind JS: what can do with the help of bind, 
            we can keep copy of function and call or invoking it later 
            1. Keep a copy of the function using bind() method
            2. Call that copied function whenever needed in future 

*/



let student1 = {
    name: "Imtiyaz",
    age: 22,
    Designation: "Engineer",
za
}
let printDetails = function (state, country) {
    console.log(this.name + " " + state + " " + country);
    console.log(this.age + " years old");
    console.log("I am a " + this.Designation);
    
}

printDetails.call(student1, "London", "England"); // Output : Imtiyaz London England



let student2 = {
    name: "Mumtaz",
    age: 24,
    Designation: "Software Engineer",

}

let newBindFun = printDetails.bind(student2, "Bihar", "India");   // Here bind method 
newBindFun()





