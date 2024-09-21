// strings in JS
const name="Aryan"
const repoCount=20

//not good practise
console.log(name + repoCount + " Value");
//Good Practise
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Aryan-Thapa-Demon')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);

// string methods
console.log(gameName.charAt(2));
console.log(gameName.indexOf("A"));
const newstr=gameName.substring(0,4);
console.log(newstr);
const newstr2=gameName.slice(-8,-1);
console.log(newstr2);
const newStringOne="  Aryan  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://aryan.com/aryan%20thapa"

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));
