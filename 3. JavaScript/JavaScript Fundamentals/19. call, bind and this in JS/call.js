

// problem dekhiye tab use hoga call 
/*
function SetUsername(username) {
    // complex Database calls
    this.username = username
    console.log("Called");
}


function createUser(username, email, password) {
    SetUsername(username); // exceute ho kar reference pop ho ja raha hai agar hold karke rakhna hai toh please use call() method

    this.email = email;
    this.password = password
}

const result = new createUser("imtiyaz", "imtiyaz@googlem.com", "321")
console.log(result);
*/




// See below example of call() method:

function SetUsername(username) {
    // complex Database calls
    this.username = username
    console.log("Called");
}


function createUser(username, email, password) {
    SetUsername.call(this, username); //yahan par matlab hai mera this use kijiye
    this.email = email;
    this.password = password
}

const result = new createUser("imtiyaz", "imtiyaz@googlem.com", "321")
console.log(result);

// ye call() method hamare current excecution context ko kisi dusre excecution ko pass kar deta hai






