console.log("Script.js initializing")
let boxes=document.getElementsByClassName("box")
console.log(boxes)

Array.from(boxes).forEach(e=>{
    console.log(e);
})

function getrandomcolor()
{
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.background=getrandomcolor();
    e.style.color=getrandomcolor();
})