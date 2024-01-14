// factorial of a number
let n=prompt("Enter a number");
let ans=n;
let num=n;
while (n>1) 
{
    ans=ans*(n-1);
    n=n-1;
} 
alert(`Factorial of ${num} is ${ans}`);

