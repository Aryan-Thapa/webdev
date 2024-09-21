const userEmail=""
// empty string will be assumed as falsy value
// if string has any value then it is assumed to be truthy
if(userEmail){
    console.log("Got Email");
}
else{
    console.log("Dont have Email");
}

// FALSY VALUES -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES -> true, "0", 'false', " ", [], {}, function(){} 

let val1;
val1=null??10
let val2=null??10??20
console.log(val2);
// Nullish Coalescing Operator(??)

// condition?true:false //ternary operator

const price=69
price>=80?console.log("More than 80"):console.log("less than 80");