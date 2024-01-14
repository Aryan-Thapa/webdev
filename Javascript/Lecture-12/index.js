console.log("Aryan");
let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.background="red"

document.getElementById("redbox").style.background="red";

// selects the first query with box class and makes it background green
document.querySelector(".box").style.background="green";


// coloring all the boxes aqua using for each loop on queryselectorall
document.querySelectorAll(".box").forEach(e=>{
    e.style.background="aqua";
})

const boxes2=document.querySelectorAll(".box");
for (let i = 0; i <boxes2.length; i++) {
    boxes2[i].style.background="beige";
}

document.querySelectorAll(".box").forEach(e=>{
    e.style.color="darkblue";
})

// getting elements by tag name 
let a=document.getElementsByTagName("div");

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    element.style.background="orange" 
}
// read handwritten notes for other functions like ismatch .contains etc

