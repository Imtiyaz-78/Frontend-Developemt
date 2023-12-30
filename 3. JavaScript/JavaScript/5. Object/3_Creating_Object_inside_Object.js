
// node 3_Creating_Object_inside_Object.js

const collection = {
    fullName: "akash",
    age: 44,
    flag: true,
    salary: [1000, 2000, 4444],

    address: {
        doorNo: 12,
        locationDetails: "bangalore",
        phoneNumber: 3333434
    }
};
console.log(collection.fullName);            // output ---> akash
console.log(collection.address.doorNo);      // output ---> 12
console.log(collection.address.phoneNumber); // output ---> 3333434
