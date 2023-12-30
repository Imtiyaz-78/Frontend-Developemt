
// node 8_writing_Method_Inside_Object.js

const employee = {
    fullName: "Imtiyaz",
    age: 44,
    location: "bangalore",
    display: function () {
        console.log("welcome to display");
        return 0;
    },
    salary: 40000,
    addition: function (a, b) {
        return a + b;
    }
}
console.log(employee);
console.log(employee.fullName);
console.log(employee.display());
console.log(employee.addition(33, 33)); // output ---> 66


// 2nd Different Method writing function inside the object
const employee2 = {
    fullName: "salman",
    age: 44,
    location: "bangalore",
    display() {
        console.log("display");
        return 0;
    },
    addition(a, b) {
        return a + b;
    }
}
console.log(employee.display());
console.log(employee.addition(22, 33));