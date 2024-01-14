const baseURL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const dropd=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

window.addEventListener("load",()=>{
    updateexchangerate();
})

for (let select of dropd) 
{
    for(code in countryList)
    {
        let newoption=document.createElement("option");
        newoption.innerText=code;
        newoption.value=code;
        if (select.name==="from" && code==="USD")
        {
            newoption.selected="selected";
        }

        if (select.name==="to" && code==="INR")
        {
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });  
}

const updateflag=(element)=>{
    let code=element.value;
    let countrycode=countryList[code];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc; 
}

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();//preventing the default behaviour of the form button.
    updateexchangerate();
})

const updateexchangerate=async()=>{
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval==="" || amtval<1)
    {
        amtval="Enter Valid Number";
        amount.value=amtval;
    }
    const url=`${baseURL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response=await fetch(url);
    let data=await response.json();
    let rate=data[tocurr.value.toLowerCase()];
    let finalamt=amtval*rate;
    msg.innerText=`${amtval} ${fromcurr.value} = ${finalamt} ${tocurr.value} `;
}

