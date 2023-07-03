var yukari=document.getElementsByClassName("yukari_cik")[0];
//console.log(yukari);

//console.log(window);
window.addEventListener("scroll", function(){
    const mesafe=this.window.scroll;
    //console.log(mesafe);
    if(mesafe>300){
        yukari.classList.add("goster");
    }else{
        yukari.classList.remove("goster");
    }
});
yukari.addEventListener("click", function(){
    window.scrollTo(0,0);
});

basadön = document.getElementById("basadön");
window.onscroll = function(){
    scroll
}