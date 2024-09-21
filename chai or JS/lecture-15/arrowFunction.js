// function chai(){
//     let username="Aryan"
//     console.log(this);
// }

// const chai = function(){
//     username="Aryan"
//     console.log(this.username);
// }

// const chai = () => {
//     let username="Aryan"
//     console.log(this);
// }
// chai()

// const addtwonum = (num1, num2) => {
//   return num1 + num2;
// };

// const addtwonum = (num1, num2) => num1 + num2;
const addtwonum = (num1, num2) => (num1 + num2);
const returnObject=()=>({username:"Aryan"})
  

console.log(addtwonum(3, 4));
console.log(returnObject());
