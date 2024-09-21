const user={
    username:"Aryan",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="SAM Boxer"
// user.welcomeMessage()

console.log(this);