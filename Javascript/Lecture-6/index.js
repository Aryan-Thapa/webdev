// faulty calculator
let random=Math.random()
let a=prompt("Enter your first number");
let b=prompt("Enter the operation you want to perform");
let c=prompt("Enter the next number");
let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random>0.1)
{
    //perform right operation
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else
{
    //perform wrong operation
    c=obj[c];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}