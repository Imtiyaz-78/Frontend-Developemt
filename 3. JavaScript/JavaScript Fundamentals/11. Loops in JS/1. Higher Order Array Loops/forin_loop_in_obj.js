

let myObject = {
    js: "javaScript",
    rb: "ruby",
    py: "pyhthon"
}

for (const key in myObject) {
    // console.log(`${key} shortcuts is for ${myObject[key]}`);

}


const programming = ["c", "c++", "java", "python", "react", "javascript"]

for (const value in programming) {
//    console.log(`${value} ==> programming ${programming[value]}`);
}

// forin loop not iterable on map 
const map = new Map()
map.set('IN' , "india")
map.set("BR", "Bihar")
map.set("DBG", "Darbhanga")
map.set("DLI", "Delhi")

for (const key in map) {
    console.log(key); // kuchh nhi print hoga not iterable on map 
}