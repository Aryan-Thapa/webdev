console.log("This is a string");
let a="Aryan";

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}
// size of the string
console.log(a.length);
let name="Aryan"
let friend="Archit"
console.log("His name is "+name+"and his friends name is "+friend);
console.log(`His name is ${name} and his friends name is ${friend}`);

let str="Shivam";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.slice(1,4));
console.log(str.replace("Sh","77"));
console.log(str.concat(a));
// trim to rmeove white spaces
let c=str.trim();
console.log(c);

// More string functions are
str.charAt(0);
str.indexOf("Sh");
str.startsWith("Sh");
str.startsWith("Ar");
str.endsWith("an");