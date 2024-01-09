


// <===========> Object de-structuring and JSON API <==========>

// 1. De-Structing of Object
const course = {
    courseName: "JavaScript-Baisc",
    price: 786,
    duration: "3 Months",
    courseInstructor: "XYZ",

}

// How to de-structure:
console.log(course.courseInstructor); // XYZ

// OR
const { courseInstructor } = course;
console.log(courseInstructor); // XYZ

// OR --> This is best and most usable
const { courseInstructor: instrcutor } = course;
console.log(instrcutor); // XYZ

