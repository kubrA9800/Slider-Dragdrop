"use strict";

let rightIcon=document.querySelector(".slider-area .slider .icons i:nth-child(2)")
let leftIcon=document.querySelector(".slider-area .slider .icons i:nth-child(1)")


rightIcon.addEventListener("click", function(){
    let activeSlider=document.querySelector(".active-slider")
    if(activeSlider.nextElementSibling!=null){
        activeSlider.classList.remove("active-slider")
        activeSlider.nextElementSibling.classList.add("active-slider")
    }else{
        activeSlider.classList.remove("active-slider")
        activeSlider.parentNode.firstElementChild.classList.add("active-slider")
    }
})
leftIcon.addEventListener("click", function(){
    let activeSlider=document.querySelector(".active-slider")
    if(activeSlider.previousElementSibling!=null){
        activeSlider.classList.remove("active-slider")
        activeSlider.previousElementSibling.classList.add("active-slider")
    }else{
        activeSlider.classList.remove("active-slider")
        activeSlider.parentNode.lastElementChild.classList.add("active-slider")
    }
})
setInterval(() => {
    let activeSlider=document.querySelector(".active-slider")
    if(activeSlider.nextElementSibling!=null){
        activeSlider.classList.remove("active-slider")
        activeSlider.nextElementSibling.classList.add("active-slider")
    }else{
        activeSlider.classList.remove("active-slider")
        activeSlider.parentNode.firstElementChild.classList.add("active-slider")
    }
}, 800);





// let dragElem=document.getElementById("drag-elem");
// let dropElem=document.getElementById("drop-elem");


// dragElem.ondragstart=(e)=>{
//     let id=e.target.getAttribute("id");
//     e.dataTransfer.setData("id",id);
// }
// dropElem.ondragover=(e)=>{
//     e.preventDefault();
// }
// dropElem.ondrop=(e)=>{
//     e.target.append(document.getElementById(e.dataTransfer.getData("id")))
// }