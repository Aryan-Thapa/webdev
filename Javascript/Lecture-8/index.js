// Javascript arrays
let arr=[1,2,4,5,7];
console.log(arr);
console.log(arr.length);
// arrays are mutable unlike strings as the original strings remain intact upon updation//
arr[0]=7;
console.log(arr[0]);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
// array types are objects
console.log(arr.toString());
console.log(arr.join(" and "))
console.log(arr.pop());//deletes the last element
arr.push(100);//pushes 100 in last index
console.log(arr);
arr.push("Aryan");//pushes this string to the last index of arr
arr.shift(); //shifts the array by 1 index from beginning that is first element is removed from array
arr.unshift(77);//adds 77 to the first index of the array

delete arr[4];

let a1=[1,2,3];
let a2=[4,5,6];
let a3=[9,8,7];
// returns a new array doesnt change the existing array
console.log(a1.concat(a2,a3));

arr.sort();
// this function sorts the array in increasing order and the changes are made in original array
let numbers=[1,2,3,4,5];
// removes the elements from starting index and numbers of elements to delete after that index given in function
//numbers.splice(1,2);
numbers.splice(1,2);

// slice function this function cuts a piece from an array and creates a new array
let nums=[1,2,43,5,6];
// console.log(nums.slice(2));
console.log(nums.slice(1,3));//3 isnt included in the output    
