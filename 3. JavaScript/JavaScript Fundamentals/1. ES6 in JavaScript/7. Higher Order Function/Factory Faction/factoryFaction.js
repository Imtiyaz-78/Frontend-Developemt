

function CreateDog(name, age) {
    return {
        name: name,
        age: age,
        bark: function () {
            console.log("Woof, Woof!");
        }
    }
}

const dog1 = CreateDog("Max", 5)
const dog2 = CreateDog("Bob", 10)

console.log(dog1);
console.log(dog2); 

/* output of above code 
  { name: 'Max', age: 5, bark: [Function: bark] }
  { name: 'Bob', age: 10, bark: [Function: bark] }
*/


dog1.bark() // Woof, Woof!