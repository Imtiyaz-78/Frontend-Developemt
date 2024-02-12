

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
            timer = setTimeout(() => {
                call(); // Call the original function after delay
            }, delay);
        }
    }
}

const debounceFunction = myDebounce(getData, 3000);



