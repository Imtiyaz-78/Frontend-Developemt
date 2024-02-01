


// <===========> Object de-structuring and JSON API <==========>

// 1. De-Structing of Object
const course = {
    courseName: "JavaScript-Baisc",
    price: 786,
    duration: "3 Months",
    courseInstructor: "imtiyaz",

}

// How to de-structure:
console.log(course.courseInstructor); // imtiyaz

// OR
const { courseInstructor } = course;
console.log(courseInstructor); // imtiyaz

// OR --> This is best and most usable
const { courseInstructor: instrcutor } = course;
console.log(instrcutor); // imtiyaz


// <=====================> API <=======================>
// Free api --> https://randomuser.me/
//  json ko format karne ke liye --> https://jsonformatter.org/


