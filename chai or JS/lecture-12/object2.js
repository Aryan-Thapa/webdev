// const user=new Object() //singleton object
const user={} //non singleton object
user.id="123abc"
user.name="aryan"
user.isLoggedIn=false
// console.log(user);

const regularUser={
    email:"aryan@google.com",
    fullname:{
        userfullname:{
            firstname:"Aryan",
            lastname:"Thapa"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3=Object.assign({},obj1,obj2) //{} will be target others are source (as first parameter acts as target)

const obj4={...obj1,...obj2}
console.log(obj4);

// keys and values
console.log(Object.keys(user));
console.log(Object.values(user));

console.log(user.hasOwnProperty('isLoggedIn'));