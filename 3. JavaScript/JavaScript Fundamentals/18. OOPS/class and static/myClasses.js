
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const employe = new User("Imtiyaz_78", "imtiyaz@google.com", "786");
console.log(employe.encryptPassword());
console.log(employe.changeUserName());



// behind the scene what happen above code see below


//agar javascript mein class wali functionality nhi hoti toh yahi below wali feature use kar
function Users(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

Users.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}


const behindTheScenece = new Users("mustak", "mustak@googale.com", "780")
console.log(behindTheScenece.encryptPassword());
console.log(behindTheScenece.changeUserName());