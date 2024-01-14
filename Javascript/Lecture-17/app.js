function getdata(dataid,getnextdata)
{
    setTimeout(() => {
       console.log("data",dataid);
       if(getnextdata)
       {
        getnextdata();
       } 
    }, 2000);
}
// callback hell or nested callbacks stacked below each other aka pyramid of doom 
getdata(1,()=>{
    console.log("getting data2...");
    getdata(2,()=>{
        console.log("getting data3...");
        getdata(3);
    })
})

// Concepts of promises comes in clutch to handle callback hell
// object in JS with 3 states pending resolve and rejected (resolve and rejects are callbacks provided by JS)

// two function used with promises
// then used when problem is resolved

// catch used when problem is rejected