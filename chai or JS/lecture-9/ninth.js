// numbers and maths in JS

// Number
const score = 400
const balance = new Number(100.69)
console.log(score);
console.log(balance);
const newstr=balance.toString()
console.log(typeof newstr);

console.log(balance.toFixed(1));
const othernumber=123.8966;
console.log(othernumber.toPrecision(3));

const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN'));