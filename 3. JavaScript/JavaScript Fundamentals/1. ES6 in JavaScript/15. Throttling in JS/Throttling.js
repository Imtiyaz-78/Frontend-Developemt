

const myThrottle = (func, delay) => {
    return function () {
        document.querySelector("#myID").disabled = true;
        setTimeout(() => {
            func();
        }, delay)
    }
}




const newThrott = myThrottle(() => {
    document.getElementById('myID').disabled = false;
    console.log("User Cliked ");
}, 4000)