// functions in JS
function nice(name) 
{
    console.log("hey "+name+" you are nice.");
    console.log("hey "+name+" you are good.");
    console.log("hey "+name+" you are funny.");
}
nice("Aryan")
nice("Archit")

// function sum(a,b) {
//     console.log(a+b);
// }
function sum(a,b) {
    return a+b;
}
result=sum(5,2);
console.log("The sum of two numbers is:",result);

sum(3,5);
// c have a default value
function sum2(a,b,c=3) {
    return a+b+c;
}
console.log(sum2(5,1));

// arrow functions

const func1=(x)=>{
    console.log("I am an arrow function",x)
}

func1(7);