let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".gbutton");
const msg=document.querySelector(".movebtn");
const score1=document.querySelector("#user-score");
const score2=document.querySelector("#comp-score");
const resetbtn=document.querySelector(".reset")

resetbtn.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    score1.innerHTML=userscore;
    score2.innerHTML=compscore;
    msg.innerHTML="Pick Your Move";
    msg.style.backgroundColor="rgb(29, 88, 90)";
})
const gencompchoic=()=>{
    const arr=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3)
    return arr[idx];

}

const drawgame=()=>{
    console.log("game was Draw");
    msg.innerHTML="Game was Draw!!";
    msg.style.backgroundColor="blue";
}

const showwinner=(userwin,choiceid,compchoice)=>{
    if(userwin===true)
    {
        userscore++;
        console.log("You WON");
        score1.innerHTML=userscore;
        msg.innerHTML=`Congrats!! You Won :) Your ${choiceid} beats ${compchoice}`
        msg.style.backgroundColor="Green";
    }
    else{
        compscore++
        console.log("You Lost!");
        score2.innerHTML=compscore;
        msg.innerHTML=`You Lost:( ${compchoice} beats Your ${choiceid} Better Luck Next Time.`
        msg.style.backgroundColor="Red";
    }
}

const playgame=(choiceid)=>{
    console.log("user choice is: ",choiceid);
    //generate compchoice
    const compchoice=gencompchoic();
    console.log("computer choice is:",compchoice);

    if(compchoice===choiceid)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(choiceid==="rock")
        {
            //s or p
            userwin=compchoice==="paper"?false:true;
        }
        else if(choiceid==="paper")
        {
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,choiceid,compchoice);
    }

}

choices.forEach((gbutton)=>{
    gbutton.addEventListener("click",()=>{
        const choiceid=gbutton.getAttribute("id");
        console.log("choice was clicked",choiceid);
        playgame(choiceid);
    });
});