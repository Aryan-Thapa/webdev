// Arrays
const arr=[1,2,3,4,5,6,7]
const myHeroes=["Mr Perfect","Flying Jatt"]

const arr2=new Array(1,2,3,4,5,6,7)
console.log(arr2[6]);

// arrays copied in js always create shallow copies

// shallow copy are copies which shares same reference point and deep copy doesnt share same reference points

// Array methods

// arr.push(7) adds 7 to the last of the array
// arr.push(77)
// arr.pop() removes the last element of the array
arr.unshift(0) //adds the element in the start of the array
arr.shift() //removes the element from the start of the array
console.log(arr.includes(7)); //checks if 7 is in the array or not
console.log(arr.indexOf(3)); //tells index of 3

const newArr=arr.join()
console.log(arr);
console.log(typeof newArr);

// slice,splice
console.log("A ",arr);

const myn1=arr.slice(1,3);
console.log(myn1);
console.log("B ",arr);

const myn2=arr.splice(1,3);
console.log(myn2);
console.log("C ",arr);




