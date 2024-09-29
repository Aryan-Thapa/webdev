// object literal -> literally creating an object
const user = {
  // properties like array have a property .length
  username: "Aryan",
  loginCount: 7,
  signedIn: true,

  // method like array has map method
  getUserDetails: function () {
    // console.log("Got user details from DB")
    // console.log(`username:${username}`) gives undefined as we havent given the context
    console.log(`username:${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());

// Constructor function eg new keyword provides a new instance or copy of the method
// const date = new Date();
// const promiseOne = new Promise();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  //   return this; not required implicitly defined

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
}

// const userOne = User("Aryan", 7, "true");
// const userTwo = User("Chai aur Code", 11, "false");
// // The above userTwo will overwrite the userOne in this case as we have not used a new instance of the method
// console.log(userOne);

const userOne = new User("Aryan", 7, "true");
const userTwo = new User("Chai aur Code", 11, "false");
console.log(userOne);
// console.log(userTwo);

// new keyword sabse pehle ek empty object create hota hai jisko hum instance bhi kehte hai
// constructor function call hota hai new keyword ke kaaran ye basically kya karta hai jitne bhi argument wagera hote hai usme pack karke aapko dedeta hai
// this keyword usme jo bhi argument wagera likhe hai inject hojate hai
// fir humko function ke andar mil jata hai
