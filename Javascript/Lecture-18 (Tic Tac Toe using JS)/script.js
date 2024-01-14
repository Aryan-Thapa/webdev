let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector("#newbtn");
let msgcont=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO=true;
let clickcount=0;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true;
    clickcount=0;
    enableboxes();
    msg.classList.add("hide");
    newbtn.classList.add("hidebtn");
}
const matchdraw=()=>{
    msg.innerText=`Match is Draw`;
    msg.classList.remove("hide");
    newbtn.classList.remove("hidebtn")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        clickcount++;
        console.log(clickcount);
        if(clickcount>=9)
        {
            checkwinner===false;
            matchdraw();
            clickcount=0;
        }
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msg.classList.remove("hide");
    newbtn.classList.remove("hidebtn")
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winpatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

