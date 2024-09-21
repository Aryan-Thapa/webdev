// Dates
let myDate = new Date() // Date is a object
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate1=new Date(2002,1,23);
// let myCreatedDate=new Date(2002,1,23,5,3);
let myCreatedDate=new Date("2023-09-10");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); get time in milliseconds from the initial date registered to current date 
// console.log(myCreatedDate.getTime()); same as above just till the date mentioned
// converts the time from millisecond to seconds
console.log(Math.floor(Date.now()/1000)); 

let newDate= new Date()
console.log(newDate.getMonth()); //month starts from zero
console.log(newDate.getDay()); 

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"long"
}))