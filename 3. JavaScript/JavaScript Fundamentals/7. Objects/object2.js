



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

//  new Employee ka details
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


// ==> How to combine or merge two or more object:
const obj1 = {
    name1: "imtiyaz",
    age1: 23
}
const obj2 = {
    name2: "Mustak",
    age2: 32
}


const merge_result = { obj1, obj2 } // but they will be give nested object bad ouput
// console.log(merge_result);

// Above code ouput below:
// {
//     obj1: { name: 'Imtiyaz', age: 23 },
//     obj2: { name: 'Imtiyaz', age: 23 }
//   }

// Best way to combine or merge two object
const result = Object.assign({}, obj1, obj2); // {} ye dena chahiye isse all object store hota hai 
console.log(result);



