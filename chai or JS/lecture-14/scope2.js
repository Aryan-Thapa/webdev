// function one(){
//     const username="Aryan"
//     function two(){
//         const website = " youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }

// one()

if (true) {
  const username = "Aryan";
  if (username === "Aryan") {
    const website = " Youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}
console.log(addOne(5));
// above functions work fine for both the console logs

// console.log(addTwo(2)); gives error
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(2)); //runs fine

