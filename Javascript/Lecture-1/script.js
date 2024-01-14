console.log("This is my first JS code");
var a=5;
a=a+1;
var b=2;
var c="Aryan";
// variable naming convention
//-you cannot start a variable name with a number 
console.log(a+b);
console.log(typeof a,typeof b,typeof c);

const a1=5;
// a1=a1+1;//this is not allowed wil throw an error as a1 is constant

// var vs let
// var is globally scoped and let is block scoped
let d=7;
{
    let d=91;
    console.log(d);
}
console.log(d);
var v=7;
{
    var v=91;
    console.log(v);
}
console.log(v);

let x="Aryan bhai";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

// objects is a key value pair datatype in JS
let o={
    "name":"Aryan",
    "Job role":7777,
    "is-handsome":true
};
console.log(o);
o.salary="50lpa";
console.log(o);
o.salary="75lpa";
console.log(o);
