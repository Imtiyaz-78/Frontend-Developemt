

// apply: In apply method we can pass an array instead of multiple arguments

/* apply JS:--> call and apply dono same chij hai but diffrence itna sa hai ki
                apply mein array ke form mein list of argument pass kar sakte hai 
                send karte hai, dono same kam karta hai jaise aap use kijiye  
                
*/


let student1 = {
    name: "Imtiyaz",
    age: 22,
    Designation: "Engineer",

}
let printDetails = function (state, country) {
    console.log(this.name + " " + state + " " + country);
    // console.log(this.age);
}

printDetails.call(student1, "London", "England");


let student2 = {
    name: "Mumtaz",
    age: 24,
    Designation: "Software Engineer",

}

printDetails.call(student2, "Bihar", "India");   // Here by call method 
printDetails.apply(student2, ["Bihar", "India"]); // Here by apply method 


