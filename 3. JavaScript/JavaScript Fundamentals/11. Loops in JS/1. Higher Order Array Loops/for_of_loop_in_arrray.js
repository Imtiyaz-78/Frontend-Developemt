

// <=================> Higher order Array loop <==========> 

// 1. for_of loop <=== array par lagana loop toh hum ye use kar lengey  
// 2. for_in loop <===  object par lagana loop toh hum ye use kar lenge



// Array ke under object bhi store hote hai jab hum API and database se data retrieve fetch karenge toh ... dekhenge

// [{}, {}, {}]
// ["", "", ""]

// 1. for of loop <==  for_of loop work array and string

const arr = [1, 2, 3, 4, 5]

for (let value of arr) {
    value = value++;
    // console.log(value);
}


const str = "Hello Developer";
for (const i of str) {
    // console.log(`Each char is : ${i}`);
}



const map = new Map()
map.set('IN', "india")
map.set("BR", "Bihar")
map.set("DBG", "Darbhanga")
map.set("DLI", "Delhi")

for (const value of map) {
    console.log(value); // ye pura key and value ka map hi print kar diya --> 1st ['IN', 'india'] etc
    console.log(map(value));
}

