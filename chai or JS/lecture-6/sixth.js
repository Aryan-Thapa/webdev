// Datatypes summary for Interview
// JS is dynamically typed language, which means that the interpreter assigns a variable's type at runtime based on its value at that time. This allows variables to hold values of different types during runtime, and it offers greater flexibility in handling data. For example, you don't need to explicitly declare a variable's data type in JavaScript, unlike in languages like Typescript or Java. 

// two types
// Primitive and Non Primitive

// Primitive (Call by value)
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);
const bigNumber=34763463n;
console.log(typeof bigNumber);

// Non Primitive (Reference type) Array, Objects, Functions

// Arrays
const heros=["flying jatt","Krish","Shaktimaan"];

let myObj= {
    name:"Aryan",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof heros);

// note when checked typeof null it returns object undefined returns undefined and for all non primitive datatypes it returns object
