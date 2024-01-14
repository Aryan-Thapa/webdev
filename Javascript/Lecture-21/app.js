// Synchronous means the code runs in a particular sequence of instructions given in the program each instruction waits for the previous instruction to complete its execution .

// In synchronous programming sometimes imp istruction get blocked due to some previous instruction,which causes deleay in the UI. in such cases Asynchronous code execution allows to execute next instructions immediately and doesnt block the flow

// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("hello");
// },2000);//timeout
// console.log("3");
// console.log("4");

// callback is a function passed as an argument to another function.
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

// calculator(1,2,sum);//here sum is a callback callbacks arent passed with () i.e, sum() wont be passed

// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

// // callback hell
// // nested callbacks stack one below another forming a pyramid structure 

// // function getdata(dataid,getnextdata)
// // {
// //     setTimeout(()=>{
// //         console.log("data",dataid);
// //         if(getnextdata)
// //         {
// //             getnextdata();
// //         }
// //     },2000);
// // }
// //  getdata(1,()=>{
// //     console.log("getting data 2")
// //     getdata(2,()=>{
// //         console.log("getting data3")
// //         getdata(3,()=>{
// //             console.log("getting data 4");
// //             getdata(4);
// //         });
// //     });//callback each data will be printed after delay of 2 seconds
// //  });
// //  to deal with callback hells promises is used
// // promise is a object in JS which has three states pending resolve and rejected where resolve and reject are two handlers callbacks provided by JS

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("success");//accept promise
//     reject('some error occured');//reject promise
// })

// //callback hell
// // function getdata(dataid,getnextdata)
// // {
// //     setTimeout(()=>{
// //         console.log("data",dataid);
// //         if(getnextdata)
// //         {
// //             getnextdata();
// //         }
// //     },2000);
// // }
// //  getdata(1,()=>{
// //     console.log("getting data 2")
// //     getdata(2,()=>{
// //         console.log("getting data3")
// //         getdata(3,()=>{
// //             console.log("getting data 4");
// //             getdata(4);
// //         });
// //     });//callback each data will be printed after delay of 2 seconds
// //  });

//  //promise
//  function getdata2(dataid,getnextdata)
//  {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//             if(getnextdata){
//                 getnextdata();
//             }
//         },2000)
//     })
//  }
//  let p=getdata2(12);
// //  promises object can be
// // pending:result is undefined
// //resolved:result is a value
// //rejected:result is an error


// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a Promise");
//         resolve("sucess");
//         reject("error");
//     });
// }

// let prom=getpromise();
// prom.then((res)=>{
//     console.log("Promise Fulfilled",res);
// });

// prom.catch((err)=>{
//     console.log("Rejected",err);
// })

// Promise Chain
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("Success");
        },2000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("Success");
        },2000);
    });
}

// Promise Chaining
// console.log("Getting Data1...");
// asyncFunc1().then((res)=>{
//     console.log(res);
//     console.log("Getting Data2...");
//     asyncFunc2().then((res)=>{
//     console.log(res);
// });    
// });

 function getdata2(dataid)
 {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success");
        },2000);
    });
 }

getdata2(1).then((res)=>{
    console.log(res);
    getdata2(3).then((res)=>{
        console.log(res);
    })
})
// actual method of writing the above statement is the below one
getdata2(1).then((res)=>{
    console.log(res);
    return getdata2(3)
}).then((res)=>{
    console.log(res);
})


// Async-Await

