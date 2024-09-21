const heroes=["flyingjatt","shaktiman","Krishh","Mr Perfect"]
const dcHeroes=["Superman","Flash","Batman"]
// heroes.push(dcHeroes);
// console.log(heroes[4][2]);
const allHeroes=heroes.concat(dcHeroes)
console.log(allHeroes);

// Spread operator
const allNewHeroes=[...heroes,...dcHeroes]
console.log(allNewHeroes);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// flattening the above array
const realAnotherArray=anotherarray.flat(Infinity)
console.log(realAnotherArray);

// converting a string to array

console.log(Array.isArray("Aryan"));
console.log(Array.from("Aryan"));

console.log(Array.from({name:"Aryan"})) //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));