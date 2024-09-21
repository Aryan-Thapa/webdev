// objects
// object literals

const mySym=Symbol("key1")

const jsUser = {
  name: "Aryan",
  "full name": "Aryan Thapa",
  [mySym]: "my key1",
  age: 22,
  location: "Dehradun",
  email: "Aryan@google.com",
  isLoggedIn: false,
  lastloginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email="aryan@microsoft.com"
// Object.freeze(jsUser); //freezed further changes
// jsUser.email="aryan@amazon.com"
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello jsUser");
}

jsUser.greetingtwo=function(){
    console.log(`hello jsUser ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());