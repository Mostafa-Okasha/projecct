
var imgs =document.querySelectorAll(".img-item");

var lightbContainer =document.getElementById("lightbox-container");
var lightboxItem =document.getElementById("lightbox-item");
var currentIndex=0;
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close=document.getElementById("close");

var imgArr=[];
for(var i=0;i<imgs.length;i++)
    {

                    imgArr.push(imgs[i]);

        imgs[i].addEventListener("click",function(e){
            currentIndex =imgArr.indexOf(e.target);
            console.log(currentIndex);
            var imgSrc=e.target.src;
            lightbContainer.classList.add("show");
            lightboxItem.style.backgroundImage="url("+imgSrc+")";
        })
    }

close.onclick=function()
{
    lightbContainer.classList.remove("show");
}

next.addEventListener("click",function(){
    currentIndex++;
    console.log(currentIndex);
    if(currentIndex==imgs.length)
        {
            currentIndex=0;
        }
    lightboxItem.style.backgroundImage="url("+imgs[currentIndex].src+")";
})