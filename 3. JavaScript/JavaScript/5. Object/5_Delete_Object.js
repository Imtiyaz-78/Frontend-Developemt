
// node 5_Delete_Object.js


const address = {
    name: "Imtiyaz",
    city: "Darbhnga",
    State: "Bihar",
    Age: 22,
    qualification: "B.Tech",
    Profession: "Engineer"
}

console.log(address);

delete address.State;
console.log(address);

// output ---->
/*

{
  name: 'Imtiyaz',
  city: 'Darbhnga',
  Age: 22,
  qualification: 'B.Tech',
  Profession: 'Engineer'
}

*/