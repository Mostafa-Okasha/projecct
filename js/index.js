var imgs = [];
var currentIndex = 0; // rakm elsora ely mafto7a dlwa2ty fi el arr
var imgList = document.querySelectorAll(".img-item"); // feh 5 swar
var item = document.querySelector(".lightbox-item");
var lightBoxContainer = document.querySelector(".lightbox-container")
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");



for(let i=0;i<imgList.length;i++)
    {
        imgs.push(imgList[i]);
        console.log(imgs);
        imgList[i].addEventListener("click",function(e){
            let imgsrc=e.target.src;
            currentIndex=imgs.indexOf(e.target);
            lightBoxContainer.classList.add("show");
            item.style.backgroundImage=`url(${imgsrc})`;
        })
    }


close.addEventListener("click",function(){
    lightBoxContainer.classList.remove("show");
    
})

document.addEventListener("keydown",function(e){
    if(e.keyCode==27)
        {
            lightBoxContainer.classList.remove("show");
        }
})



next.addEventListener("click",function(){
    currentIndex++;
    if(currentIndex==imgs.length)
        {
            currentIndex=0;
        }
    item.style.backgroundImage=`url(${imgs[currentIndex].src})`;
})


next.addEventListener("keyup",function(){
    if(currentIndex==18)
        {
            currentIndex++;
        }
    item.style.backgroundImage=`url(${imgs[currentIndex].src})`;
})



document.addEventListener("keydown",function(e){
    if(e.keyCode==39)
        {
            currentIndex++;
        }
    if(currentIndex==imgs.length)
        {
            currentIndex=0;
        }
    item.style.backgroundImage=`url(${imgs[currentIndex].src})`;
})

document.addEventListener("keydown",function(e){
    if(e.keyCode==37)
        {
            currentIndex--;
        }
    if(currentIndex<0)
        {
            currentIndex=imgs.length-1;
        }
    item.style.backgroundImage=`url(${imgs[currentIndex].src})`;
})

