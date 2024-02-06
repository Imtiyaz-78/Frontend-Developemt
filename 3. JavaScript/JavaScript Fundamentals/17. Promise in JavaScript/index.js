
/*
// 1st way to use promise: 
const promiseOne = new Promise(function (resolve, reject) {
    //  Do an async task
    // DB calls (connect kiya, received kiya), cryptography, network call

    setTimeout(function () {
        console.log("Async task 1 is complete by sample function");
        resolve('Task 1 Completed');
    }, 1000)

    setTimeout(() => {
        console.log("Async task 2 is complete by Arrow function");
    }, 3000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})
*/



// <====================> <============================>
/*
// 2nd way use Promise: (Best way)
new Promise(function (success, reject) {
    setTimeout(() => {
        console.log("Async task 3 is complete");
        success(); // 
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
})
*/
// resolve() method: jab bhi sara work complete ho jayega ye resolve() method
// automatic inform kar dega .then() method ko app karlo


// <=======================================================================>
/*
// 3rd promise example:
const promiseThree = new Promise(function (success, reject) {
    setTimeout(function () {
        success({ username: "imtiyaz", email: "imtiyaz@google.com", mob: 9534537544 })
    }, 1000)
});

promiseThree.then(function (data) {
    console.log(data);
})
*/


// <=============================================================>
// 4th promise example: This is also best
const promiseFour = new Promise(function (resolve, rejcted) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "imtiyaz", password: "123456" });
        }
        else {
            rejcted('ERROR: somthing went wrong')
        }
    }, 2000)
})


promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (myUsername) {
    console.log(myUsername);
}).catch(function (error) {
    console.log(error);
}).finally(function () { // ye default hota ye line execute hoga hi hoga either success or failure
    console.log("The promise is either resolved or rejected");
})





// <============================================================>
// 5th promise example:

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123456" });
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 3000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();




// <=================> API Request By Async fucntion <=======================>

async function ApiRequest() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

// ApiRequest();


// Above code by another way by using then and cath method  
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json(); // return a Promise
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log("Error: ", error);
    })





