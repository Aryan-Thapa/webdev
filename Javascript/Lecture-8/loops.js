let a=[1,93,56,7,9];
a.forEach((value,index,arr) => {
    console.log(value,index,arr);
});

// let newarr=[];
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     newarr.push(element**2);
// }
// console.log(newarr);

//map function to perform the above operations
let newarr=a.map(e=>{
    return e**2;
})
console.log(newarr);

const greaterthanseven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
// below filter function will return only those elements which will satisfy the function mentioned in the parameter
console.log(a.filter(greaterthanseven));

let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b;
}
console.log(arr2.reduce(red));
console.log(Array.from("Aryan"));