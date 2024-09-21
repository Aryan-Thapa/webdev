// stack and heap memory in JS

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename="Aryandotcom"

let anothername= myYoutubename

anothername="coffeeaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="aryan@google.com" //pass by reference
console.log(userOne.email);
console.log(userTwo.email);