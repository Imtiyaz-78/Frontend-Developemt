
/*
const datas = [
    { name: "Imtiyaz", age: 20 },
    { name: "Mozakkir", age: 3 }
];


function getData() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    }, 5000);
}

/*
   uper walcode mein jab mai time change kiya then tab ye 5 second baad load huwa 
   usko reolve karne ke asynchronous programming aayi hai mujhe ek hi second mein 
   mein chalana hoga then wehave to use callback function


// This for create data
function createData(newData) {
    setTimeout(() => {
        datas.push(newData)
    }, 2000);
}

getData();
createData({ name: "mustak", age: 29 })

*/




const datas = [
    { name: "Imtiyaz", age: 20 },
    { name: "Mozakkir", age: 3 }
];


function getData() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}



// This for create data
function createData(newData, callback) {
    setTimeout(() => {
        datas.push(newData);
        callback()
    }, 2000);
}


createData({ name: "mustak", age: 29 }, getData)














