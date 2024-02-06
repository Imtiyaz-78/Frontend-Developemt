

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


function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if (!error) {
                resolve()
            } else {
                reject("This is wrong permision not allowed!!")
            }
        }, 2000);
    })
}


async function Start(){
    await createData({ name: "mustak", age: 29 })
    getData();
}

Start();


