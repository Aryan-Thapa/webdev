function createcard(thumbnail,title,cname,views,months,duration) 
{
    let viewstr;
    if(views<1000000)
    {
        viewstr=views/1000+"k";
    }
    else if(view>1000000){
        viewstr=views/1000000+"m";
    }
    else{
        viewstr=views;
    }
    let html=`<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">

        <div class="capsule">${duration}</div>
    </div>

    <div class="text">
        <h1>
        ${title}
        </h1>
        <p>${cname} . ${viewstr} views . ${months} months ago  </p>
    </div>
</div>`;
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html;
}

createcard("thumbnail.jpg","Tutorial1 || sigma batch web dev course","code with harry",727000,2,"31:20");