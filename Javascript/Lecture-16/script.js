let button=document.getElementById("btn");
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>You just clicked the button are you okay??</b>";
    button.addEventListener("dblclick",()=>{
        document.querySelector(".box").innerHTML="<b>You just double clicked the button are you okay??</b>";    
    })

    button.addEventListener("contextmenu",()=>{
        alert("Dont try to hack us by right clicking please");
    })


})