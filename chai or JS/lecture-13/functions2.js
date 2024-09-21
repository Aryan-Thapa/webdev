function calculateCartPrice(val1,val2,...num1){
    return num1
}
// rest operator used

console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"Aryan",
    price:199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"SAM BOXER",
    price:22
})

const arr=[200,400,100,700]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(arr));