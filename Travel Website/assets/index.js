//javascript code for sliding navigator
const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll(".video");
const contents=document.querySelectorAll(".main-content");


var sliderNav = function(manual){
    btns.forEach((btn,i)=>{
        btn.classList.remove("active");
    });
    slides.forEach((slide,i)=>{
        slide.classList.remove("active");
    });
    contents.forEach((content,i)=>{
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    });
});
