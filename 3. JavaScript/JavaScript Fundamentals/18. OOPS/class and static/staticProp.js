

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }

    static createId() {
        return `123`;

    }
}

const imtiyaz = new User("Mozakkir");
// console.log(imtiyaz.createId());


class Teacher  extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}


const TeacherData = new Teacher("mumtaz", "mumtaz@adobe.com")
TeacherData.logMe()