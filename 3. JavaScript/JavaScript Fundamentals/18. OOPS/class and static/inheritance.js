

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Tecaher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;

    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const result = new Tecaher("imtiyaz", "imtiyaz@google.com", "258")
const resultUser = new User("Mozakkir");
result.addCourse()
resultUser.logMe()
console.log(resultUser instanceof User);