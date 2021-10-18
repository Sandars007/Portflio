
//skills slider
var slideshows = document.querySelectorAll('[data-component="slideshow"] .slide');

var slidetime = 2000;

function initSlideShow(){
    
    var index=0;
    var time = slidetime;

    slideshows[index].classList.add('active');

    setInterval(()=>{
        slideshows[index].classList.remove('active');

        index++;

        if(index>slideshows.length) index =0;

        slideshows[index].classList.add('active');

    },time);
    
}
initSlideShow();
setInterval(()=>{initSlideShow();},slideshows.length*slidetime);

//up arrow functionality
const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});