

// How to declare object using constructor:
const whatsuser = new Object(); // This is singleton object
const whatsUser2 = {} // this Non-singleton object

// ==> How to keep value in object:
whatsUser2.id = "imtiyaz786";
whatsUser2.name = "imtiyaz";
whatsUser2.isLoggedIn = false;
whatsUser2.Loaction = "India"

// console.log(whatsuser);
// console.log(whatsUser2);
// above dono way of declare of object ka result same hi aata hai

// new Employee ka details
const regularEmp = {
    name: "imtiyazDeveloper",
    id: "1001",
    department: "IT",
    age: 23,
    location: {
        name: "programmer",
        country: "India",
        city: "Delhi",

        india: {
            firstName: "Mustak",
            age: 31,
            emp_id: "124abc"

        }
    }

}

// ==> how to access nested object:
// console.log(regularEmp.location.india.firstName); // o/p --> Mustak


// ==> How to combine or merge two or more object: Three ways
// 1st: Object.assign({} , object1, object2, ...)
// 2nd: using spread operator Ex: const res = {...object1, object2, ....}
// 3rd: const res1 = {object1, object2} --> But they will give nested obj ->{{name: 'a'}, {name1: 'a'}}

const obj1 = {
    name1: "imtiyaz",
    age1: 23,
    isLoggedIn: false,
    location: "india"
}
const obj2 = {
    name2: "Mustak",
    age2: 32
}

// 1st using simple object
const merge_result = { obj1, obj2 } // but they will be give nested object bad ouput
// console.log(merge_result);

// Above code ouput below:
// {
//     obj1: { name: 'Imtiyaz', age: 23 },
//     obj2: { name: 'Imtiyaz', age: 23 }
//   }


// So we use Object.assign() method for merging the objects
// Best way to combine or merge two object

// The Object.assign() static method copies all enumerable own properties from 
// fone or more source objects to a target object. 
// It returns the modified target object.


// 2nd using Object.assign({}, obj1, obj2) 
// Syntax: Object.assign(target, source)  {} --> ye bracket ko as target maan liye hai 
const result = Object.assign({}, obj1, obj2); // {} ye dena chahiye isse all object store hota hai 
console.log(result);



// 3rd combine using spread operator: (Most usable v.v.i)
// We can also use the spread operator (...) to combine multiple objects into one.

const spread_Result = { ...obj1, ...obj2 }
// console.log(spread_Result);



// Jab database se data hai toh wo array of object ke form mein aata hai Ex: below

const users = [
    {
        id: 1,
        name: "developer",
        email: "imtiyaz@google.com"

    },
    {
        id: 2,
        name: "Imtiyaz",
        email: "imtiyaz@faceebook.com"

    },
    {
        id: 3,
        name: "Mozakkir",
        email: "imtiyaz@adobe.com"

    }
]


// ==> How to access array of object:
// Method-1: Simple array of object
// console.log(users[0].name);  // Output: developer


// Method-2: Using forEach loop
const using_ForEach = users.forEach((users) => console.log(`User Name: ${users.name}`));
// console.log(using_ForEach);


// Method-3 : Using map function
const userNames = users.map((users) => `User Name: ${users.name}`);
// console.log(userNames);


// ==> Filtering the array of objects based on some condition
const filterUsers = users.filter((users) => users.id === 2);
// console.log(filterUsers); // [ { id: 2, name: 'Imtiyaz' } ]


// How to filter key from object (v.v.i)
console.log(Object.keys(obj1)); // [ 'name1', 'age1', 'isLoggedIn', 'location' ]

// How to filter value from object (v.v.i)
console.log(Object.values(obj1)); // [ 'imtiyaz', 23, false, 'india' ]
console.log(Object.entries(obj1)); // they converted into Array individual key value below output
// [['name1', 'imtiyaz'], ['age1', 23], ['isLoggedIn', false], ['location', 'india']]


// Hoe to check property are present or not in object
console.log(obj1.hasOwnProperty('location')); // o/p --> true, it retun true or false 


