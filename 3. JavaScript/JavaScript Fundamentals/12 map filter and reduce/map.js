
// map:
// 1. The JavaScript Map object is used to map keys to values.
// 2. It stores each element as key-value pair.
// 3. It operates the elements such as search, update and delete on the basis of specified key.
// 4. map() does not change the original array.
// 5. JavaScript map is a collection of elements where each element is stored as a Key and value pair.
// 6. Map objects can hold both objects and primitive values as either key or value.
// 7. When we iterate over the map object returns the key and value pair in the same order as inserted.




// ===> Points to remember
//    1. A map object cannot contain the duplicate keys.
//    2. A map object can contain the duplicate values.
//    3. The key and value can be of any type (allows both object and primitive values).
//    4. A map object iterates its elements in insertion order.


/*
Methods	Description
size()-->   Returns the number of elements in a map object.
clear()	--> It removes all the elements from a Map object.
delete()-->	It deletes the specified element from a Map object.
entries()->	It returns an object of Map iterator that contains the key-value pair for each element.
forEach()->	It executes the specified function once for each key/value pair.
get()--->   It returns the value of specified key.
has()-->    It indicates whether the map object contains the specified key element.
keys()-->   It returns an object of Map iterator that contains the keys for each element.
set()-->	It adds or updates the key-value pairs to Map object.
values()-->	It returns an object of Map iterator that contains the values for each element.
*/



/*
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a')); // 1


map1.set('a', 97);
console.log(map1.get('a')); // 97
console.log(map1.size); // 3


// map1.delete('b');

console.log(map1.size); // 2
console.log(map1);
*/


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const resultNums = myNumbers.map((items) => {
    return items + 20;
})
console.log((resultNums));


// or one more other way
const otherResult = myNumbers.map((nums) => nums + 20)
console.log(otherResult);
console.log(myNumbers);

// map object implicitly return kar deta hai by default (v.v.i)


const myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mixResult = myNumbers1.map((num) => num * 10)
                 .map((num) => num + 5)
                 .filter((num) => num >= 40)

console.log(mixResult);

