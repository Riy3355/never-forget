
////Satting box ////


let satting=document.querySelector('.satting-Box')
let sittingCon=document.querySelectorAll(".satting-content")
let haderul=document.querySelectorAll('.hader-ul')
let langLable=document.querySelector('.lang-lab')
let astory=document.querySelector('.active4')
let howSupport=document.querySelector('.active3')
let news=document.querySelector('.active2')

let activeli=document.querySelector('.active')
let sittinglogo=document.querySelector('.fa-backward')


///////langauge/////////

let lang=document.querySelector('.language')

let langauge=document.querySelector('.lan')
let listLang=document.querySelector('.language-list')
let lan=document.querySelectorAll('.language-list li')
let globlIcon =document.querySelector('.fa-globe')



//////Satting Events//////////



let madiascreen=window.matchMedia("(max-width:650px)")
if(madiascreen.matches){
    lang.style='display:none'
}
activeli.onclick=function(){

    activeli.style='position: relative;top: -70px; margin-left: 45px;'
    lang.style='top:0;transition:0.6s;'
    globlIcon.style.display='none'


    let madiascreen=window.matchMedia("(max-width:650px)")
    if(madiascreen.matches){
        activeli.style='display:none'
   lang.style='right: -39%;margin-top: 150px;top:-10px;padding-top:17px;display:block;padding-left:3px;    margin-right: 163px; width:97px;height: 160px'
   listLang.style='font-size:14px'
   langLable.style='font-size:14px'
}

}



langLable.onclick=function(){
    activeli.style='position: relative;top: 0; margin-left: 10px;'
    globlIcon.style.display='block'
    lang.style='top:-350px;transition:0.6s;'
    let madiascreen=window.matchMedia("(max-width:650px)")
    if(madiascreen.matches){
    lang.style='display:none;transition:0.5s'
    }
}

/*activeli.onclick=function(){

    activeli.style='margin-left:100px;position: relative;right: 20px;opacity: 0; transition: 0.5s;'
    satting.style=' right:0px;transition:0.6s;';

}*/



///////////sitting lang////////

//lang-events arbic////
