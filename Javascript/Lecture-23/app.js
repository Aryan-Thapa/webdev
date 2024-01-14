const URL="https://cat-fact.herokuapp.com/facts";
// fetch API provides an interface for fetching resources.it uses Request and Response objects. using fetch() method

const factspara=document.querySelector("#facts");

const getfacts=async()=>{
    console.log("getting data...");
    let promise=await fetch(URL);
    console.log(promise);//JSON format
    let data=await promise.json();
    let index=Math.floor(5*Math.random());
    let finaldata=data[index].text;
    factspara.innerHTML=finaldata;
}

const btn=document.querySelector("#button");
btn.addEventListener("click",getfacts);


// json() method returns a second promise that takes json as input and returns JS object as output