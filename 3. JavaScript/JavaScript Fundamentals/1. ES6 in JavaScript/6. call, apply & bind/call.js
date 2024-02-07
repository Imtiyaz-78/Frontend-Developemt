
// call, apply and bind in JS

/*
this: this keyword is used for self refrencing, 
      this keyword is use for point of the object
      this keyword is use for point of the properties of an object.
*/


let Employee1 = {
    name: "Imtiyaz",
    age: 22,
    Designation: "Engineer",
    printDetails: function () {
        console.log(this.name);
        console.log(this.age);
    }
}
Employee1.printDetails();  // output : Imtiyaz  22


// Example of call() method in JS
let Employee2 = {
    name: "Mumtaz",
    age: 24,
    Designation: "Software Engineer",

}

// called function borrowing (udhar le liya)
Employee1.printDetails.call(Employee2);
Employee1.printDetails.call({ name: 'Muzakkir', age: 30 }); // we can pass own value to call method


/* Output of above code 👍 
Mumtaz
24
Muzakkir
30

*/


// <===========================================================> 
/* pahle uper ke case mein mera printDetails function ki dependency object par thi
   means Employee1 object thi agar mera function object se bahar hoga toh see below code 

*/

console.log("==========================>");


let student1 = {
    name: "Imtiyaz",
    age: 22,
    Designation: "Engineer",

}
let printDetails = function () {
    console.log(this.name);
    console.log(this.age);
}

printDetails.call(student1);  // output: Imtiyaz 22


let student2 = {
    name: "Mumtaz",
    age: 24,
    Designation: "Software Engineer",

}

printDetails.call(student2);
printDetails.call({ name: 'Muzakkir', age: 2 });


