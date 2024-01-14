function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve("Success");
        },2000);
    });
}
async function getweather(){
    await api();//1st
    await api();//2nd
}
// getweather();


async function hello(){
    console.log("Hello");
}
// async function always returns a promise

// await pauses the execution of surrounding async function until the promise is settled.

function getdata(dataid)
{
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log("data",dataid);
           resolve("success");
       },2000);
   });
}

async function getalldata(){
    console.log("Getting data1");
    await getdata(1);
    console.log("Getting data2");
    await getdata(2);
    console.log("Getting data3");
    await getdata(3);
}
getalldata();

// IIFE immediately invoked function expression 
// (func())();

(async function getalldata(){
    console.log("Getting data1");
    await getdata(1);
    console.log("Getting data2");
    await getdata(2);
    console.log("Getting data3");
    await getdata(3);
})();
//can be used only once!!


