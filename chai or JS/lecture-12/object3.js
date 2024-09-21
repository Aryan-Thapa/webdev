// object destructure

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor : instructor}=course

console.log(instructor);

// API (apna kaam kisi or ke sar pe daalna)

// pehle xml mai ab json mai data rehta hai
// usually json is in below format but kabhi kabhi array ke form mai bhi hota hai not necessary to be in the form of object only can be a mix of two also
// {
//     "name":"Aryan",
//     "coursename":"js in hindi",
//      "price":"free"
// }