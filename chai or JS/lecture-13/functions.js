function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}
// functions are reusable block of code which performs a specific task to avoid repitiion of code for that assigned task by just simply calling the function

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// function addTwoNumbers(number1,number2){
//     let result=number1+number2;
//     return result
// }

function addTwoNumbers(number1,number2){
    return number1+number2;
}
// addTwoNumbers(3,4)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

function logInUserMessage(username="SAM BOXER"){ //sam boxer is default value
    if(!username){ //(username===undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("Aryan"))
console.log(logInUserMessage())

