

// inheritance 

const user = {
    name: "imtiyaz",
    email: "imtiyaz@google.com"
}

const Teacher = {
    makeVideo: true
}


const TeachingSupport = {
    isAvailabe: false
}


const TaSupprot = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user; // This old sytanx of Prototype inheritance 

// modern Syantax below:
Object.setPrototypeOf(TeachingSupport, Teacher) //  ye two property leta hai ki kiski propert kiske under inject karni hai


//+++++++++++++++++++++++++++++++
let anotherUserName = "imtiyaz    "; // reomve this extra spaces by using Prototype way

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.truelength(); 
"mustak".truelength();
"mumtazMd".truelength();