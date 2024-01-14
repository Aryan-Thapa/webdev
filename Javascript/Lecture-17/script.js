console.log("I am Aryan");
console.log("I am written after above statement");

// setTimeout(() => {
//     console.log("I am inside settimeout")
// }, 2000);

console.log("The end");
// below output shows the asynchrnous nature of JS as settimeout is asynchronous function which is executed at the end by not interrupting the flow of the program

// I am Aryan
// script.js:2 I am written after above statement
// script.js:8 The end
// script.js:5 I am inside settimeout

// Callback is a function passed as an argument to another function

function sum(a,b)
{
  console.log(a+b);
}
function calculator(a,b,sumcallback)
{
    sumcallback(a,b);
}
//sum function is passed as an argument in the below function hence it is a callback
calculator(1,2,sum);

// one more way to do it 

calculator(1,2,(a,b) => {
  console.log(a+b);
});

// callback hell


