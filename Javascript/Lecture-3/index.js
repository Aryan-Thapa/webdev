console.log("Loops in JS");
 let a=1;
//  console.log(a);
//  console.log(a+1);
//  console.log(a+2);

//for loop for basic traversal
for (let index = 0; index <100; index++) 
{
    console.log(a+index);
} 

let obj={
    name:"Aryan",
    role:"Developer",
    company:"XYZ"
}
// forin loop for objects
for (const key in obj) 
{
    const element = obj[key]; 
    console.log(key);  
}
//forof loop for iterable data structure
for (const c of "Aryan") 
{
    console.log(c);
}

//while loop
let i=0;
while (i<6) 
{
    console.log(i);
    i++;
}
// do while loop
let j=0;
do {
    console.log(j);
    j++; 
} while (j<6);

