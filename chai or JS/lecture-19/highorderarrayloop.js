// for of
// ["","",""],[{},{}.{}]

const arr = [1, 2, 3, 4, 5];

for (const iterator of arr) {
  console.log(iterator);
}

const greetings = "Hello World";
for (const greet of greetings) {
  console.log(`each char of string is ${greet}`);
}

// Maps
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("Fr", "FRANCE");
// console.log(map);

for (const [key,value] of map) {
    console.log(key,':',value);
}

const myObject={
    'Game1':'NFS',
    'Game2':'Spiderman'
}
// object is not iterable using for of check forin.js
for (const [key,value] of myObject) {
    console.log(key,':',value);
}

