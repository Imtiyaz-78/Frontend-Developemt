
class user {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}imtiyaz`
    }

    set password(value) {
        this._password = value
    }
}

const imtiyaz = new user("imtiyaz@google.ocm", "abc")
console.log(imtiyaz);
console.log(imtiyaz.password);
console.log(imtiyaz.email);



//<===============================================================================>
// Now getters and setters by using function 
// class se pahle object se hi karte hai get and set property ko 
// function apne aap mein object bhi or function bhi hai


function Student(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            this._email = email
        },
        set: function (value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            this._password = password
        },
        set: function (value) {
            this._password = value;
        }
    })
}

const mom = new Student("imtiyaz@facebook.com", "321")
console.log(mom);
console.log(mom._email);



// ==================================================================>
// // Now getters and setters by using function 

const employe = {
    _email: 'mozakkir@google.com',
    _password: "786786",

    get email() {
        this._email = email
    },

    set email(value) {
        this._email = value
    },

    get password() {
        this._password = password
    },

    set password(value) {
        this._password = value
    },
}

console.log(employe);
console.log(employe._email);
console.log(employe._password);



// factory function
const factory = Object.create(employe) // dafault null hota hai factory function mein
console.log(employe.email);
console.log(employe.password);