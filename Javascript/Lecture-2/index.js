console.log("Hello I am conditional tutorial");
let age=17;
// let grace=2;

// increment
// age+=grace;


//arithmetic operators
// console.log(age+grace);
// console.log(age-grace);
// console.log(age/grace);
// console.log(age*grace);
// console.log(age**grace);
// console.log(age%grace);
age=19;
if(age>=18){
    console.log("You can drive");
}
else if(age==0)
{
    console.log("are you kidding??");
}
else{
    console.log("You cannot drive");
}

// triple equals checks the value and type both
let s="7";
let ms=7;
if(s==ms)
{
    console.log(true);
}
else{
    console.log(false);
}
// triple equals to
if(s===ms)
{
    console.log(true);
}
else{
    console.log(false);
}

let m=6;
let n=8;
let c=m>n?(m-n):(n-m);
console.log(c);