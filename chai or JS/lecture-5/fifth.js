// comparisons of datatypes in JS

console.log("02">1);//true
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
// above loc is returning such results because comparsion(><) and equality check (==) works differently comparsion converts null to a number and treating as 0hence null>=0 is true and null>0 is false

// strict check
// checks if the datatype is also same
console.log("2"=== 2);