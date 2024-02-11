

let count = 0;
function getData() {
    console.log("fetching Data" + " " + count++);
}


// Better function to acheive Debouncing
function myDebounce(call, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        } else {
            setTimeout(() => {
                call(); // Call the original function after delay
            }, delay);
        }
    }
}

const debounceFunction = myDebounce(getData, 1000);



