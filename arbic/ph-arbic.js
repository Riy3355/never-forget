

////Satting box ////


//let satting=document.querySelector('.satting-Box')
//let sittingCon=document.querySelectorAll(".satting-content")
let haderul=document.querySelectorAll('.hader-ul')
let langLable=document.querySelector('.lang-lab')
let astory=document.querySelector('.active4')
let howSupport=document.querySelector('.active3')
let news=document.querySelector('.active2')

let activeli=document.querySelector('.active')
let sittinglogo=document.querySelector('.fa-backward')


///////langauge/////////

let lang=document.querySelector('.language')
let listLang=document.querySelector('.language-list')
let lan=document.querySelectorAll('.language-list li')
let arbic=document.querySelector('.arbic')
let eng=document.querySelector('.activelang')
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
   lang.style='right: -39%;margin-top: 150px;top:-10px;padding-top:17px;display:block;'
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


astory.addEventListener('click',()=>{
    window.scrollTo({
        top:1150,
        behavior:'smooth'
    })
})
howSupport.addEventListener('click',()=>{
    window.scrollTo({
        top:2300,
        behavior:'smooth'
    })
})
/////logo eveint




//landing///////////////////
let landing=document.querySelector('.Landing-Page')
let lantext=document.querySelector('.Landing-text')
let lanLable=document.querySelector('.lable')
let nexTlandingImage=document.querySelector('.fa-arrow-right')
let bacKlandingImage=document.querySelector('.fa-arrow-left')


////activeLis
let buls=document.querySelectorAll('.buls li')
let activeLi=document.querySelector(' .activeLi')

let activeLi2=document.querySelector(' .activeLi2')
let activeLi3=document.querySelector(' .activeLi3')
let activeLi4=document.querySelector(' .activeLi4')
let activeLi5=document.querySelector(' .activeLi5')
let activeLi6=document.querySelector(' .activeLi6')
let activeLi7=document.querySelector(' .activeLi7')


/////


//////landing arrys///////////////////////////

let arryimage=['Landing imag.jpg','landingimag.jpg','Landing imag4.jpg','Landing imag5.jpg','landingimag2.jpg','Landing imag7.jpg','Landing imag3.jpg']
let activeLis=[activeLi,activeLi2,activeLi3,activeLi4,activeLi5,activeLi6,activeLi7]
let landingTextarry=['أطنان القنابل على غزة منذ بداية الحرب في أكتوبر',
'\مظاهرات في كل مكان للمطالبة بالحقيقه','انما هوا جهاد نصر او استشهاد','سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ سورة الاسراء الاية 1]','يجب أن نجعل صوتنا مسموعا','يجب علينا ان لاننسى الاطفال الذين تتم ابداتهم كل يوم','يجب ان نقول الحقيقة لي اطفالنا']



let e=0

setInterval(()=>{

    e++
    if(e>=arryimage.length){
e=0

landing.style.backgroundImage='url("../imag/'+arryimage[e]+'")'

lanLable.textContent=landingTextarry[e]



bults()

    }else{
        landing.style.backgroundImage='url("../imag/'+arryimage[e]+'")'

lanLable.textContent=landingTextarry[e]


        bults()
    }
},15000)



/////////////////////////////////



///click the next button  landing imag



nexTlandingImage.addEventListener('click',()=>{
    e++;
    if(e>=arryimage.length){
e=0
landing.style.backgroundImage='url("../imag/'+arryimage[e]+'")'
lanLable.textContent=landingTextarry[e]



bults()


}else{
        landing.style.backgroundImage='url("../imag/'+arryimage[e]+'")'

        lanLable.textContent=landingTextarry[e]
    


bults()


} 
})



////////////////////////////////



//click the back buttom landing imag


bacKlandingImage.addEventListener('click',()=>{
    e--;
    if(e<0){
e=arryimage.length-1
landing.style.backgroundImage='url("../imag/'+arryimage[e]+'")'

lanLable.textContent=landingTextarry[e]
lanLable.textContent=landingarbicText.lable[e]

bults()
}
else{
        landing.style.backgroundImage='url("../imag/'+arryimage[e]+'")'
        
        lanLable.textContent=landingTextarry[e]
lanLable.textContent=landingarbicText.lable[e]
bults()
    }
})


/////////////////


///chang the color in bults
function bults(){
if(e===1){
    activeLi.classList.remove('activeLi')
    activeLi2.classList.add('activeLi')
}else{
    
    activeLi2.classList.remove('activeLi')
}
if(e===2){
    
    activeLi.classList.remove('activeLi')
    activeLi3.classList.add('activeLi')
}else{
    

    activeLi3.classList.remove('activeLi')
}
if(e===3){
    
    activeLi.classList.remove('activeLi')
    activeLi4.classList.add('activeLi')
}else{
    
    activeLi4.classList.remove('activeLi')
}
if(e===4){
    
    activeLi.classList.remove('activeLi')
    activeLi5.classList.add('activeLi')
}else{
    
    activeLi5.classList.remove('activeLi')
}
if(e===5){

    activeLi.classList.remove('activeLi')
    activeLi6.classList.add('activeLi')
}else{
    
    
    activeLi6.classList.remove('activeLi')
}
if(e===6){

    activeLi.classList.remove('activeLi')
    activeLi7.classList.add('activeLi')
}else{
    
    activeLi7.classList.remove('activeLi')
}
if(e===0){
    activeLi.classList.add('activeLi')
}
}
bults()

///End Landimg page///


//Story///
let overlay=document.querySelector('.overlay')
let allStpry=document.querySelector('.story-page')
let chapters=document.querySelector('.chapters img')
let chaptersH3=document.querySelector('.chapters h3')
let chaptersLink=document.querySelector('.chapter1 a')
 let chaptersP=document.querySelector('.chapters p')
let btn1=document.querySelector('.fa-caret-left')
let btn2=document.querySelector('.fa-caret-right')
//Chapters-page/////



let storyImag=['../imag/خنازير.jpg','../imag/storyimag6.jpg','../imag/storyimage3.jpg','../imag/storyimag7.jpeg']
let storyImagtext=['الفصل الاول','الفصل الثاني','الفصل الثالث','الفصل الرابع']//,'chapter five','chapter six',]
let storyImagtxt2=['بدية الاحتلال','مجزرة دير ياسين','هزيمتهم في حرب اكتوبر','الكثير من الشهداء ولاننسى مجزرة التي قتلت شهيد محمد دره']
let linksPage=['../chapterone.html','chapterTwo-ar.html','chapterThree-ar.html','chapterfour-ar.html']

///chang image/////
let i=0

btn1.addEventListener('click',()=>{
    
   i--
   if(i<0){
    i=storyImag.length-1
    chapters.src=storyImag[i]
    chaptersH3.textContent=storyImagtext[i]
    chaptersP.textContent=storyImagtxt2[i]
  chaptersLink.href=linksPage[i]

  

   }else{
    chapters.src=storyImag[i]
    chaptersH3.textContent=storyImagtext[i]
    chaptersP.textContent=storyImagtxt2[i] 
    chaptersH3.href=linksPage[i]
    chaptersLink.href=linksPage[i]
   }
    
})



btn2.addEventListener('click',()=>{
    i++
    if(i>=storyImag.length){
        i=0
        chapters.src=storyImag[i]
        chaptersH3.textContent=storyImagtext[i]
        chaptersP.textContent=storyImagtxt2[i]
        chaptersLink.href=linksPage[i]
    }else{
        chapters.src=storyImag[i]
        chaptersH3.textContent=storyImagtext[i]
        chaptersP.textContent=storyImagtxt2[i]
        chaptersLink.href=linksPage[i]

    }
})

//////chang image in support page///////////

let supportPage=document.querySelector('.support')
let supportimagText=document.querySelector('.support-imag h1')
let supportBcimag =document.querySelector('.support-imag')
let supportBuottom =document.querySelector('.support-imag button')
let supportNextimag=document.querySelector('.support-imag .fa-chevron-right')
let supportBackimag=document.querySelector('.support-imag .fa-chevron-left')

/////////////arrays////////////

let supportImag =['../imag/storyimg.jpg','../imag/No-Starbucks.jpg','../imag/pexels-geri-tech-14158915.jpg']
let supportImagtext=['صدقة','مقاطعة','شارك القضية']
let buttonText=['مصادر للتبرع','منتاجات المقاطعة','كيف تشارك بدون ان يسكتوك']

////click eveint///

let r=0
supportNextimag.addEventListener('click',()=>{
    r++;
    if(r>=supportImag.length){
r=0
supportBcimag.style.backgroundImage='url("../imag/'+supportImag[r]+'")'
supportimagText.textContent=supportImagtext[r]
supportBuottom.textContent=buttonText[r]
}
else{
        supportBcimag.style.backgroundImage='url("../imag/'+supportImag[r]+'")'
        supportimagText.textContent=supportImagtext[r]
        supportBuottom.textContent=buttonText[r]
    }
})


supportBackimag.addEventListener('click',()=>{
    r--;
    if(r<0){
r=supportImag.length-1
supportBcimag.style.backgroundImage='url("../imag/'+supportImag[r]+'")'
supportimagText.textContent=supportImagtext[r]
supportBuottom.textContent=buttonText[r]
}
else{
        supportBcimag.style.backgroundImage='url("imag/'+supportImag[r]+'")'
        supportimagText.textContent=supportImagtext[r]
        supportBuottom.textContent=buttonText[r]
    }
})



///chang background evry 10 scend////

setInterval(()=>{
r++
    if(r>=supportImag.length){
r=0
supportBcimag.style.backgroundImage='url("../imag/'+supportImag[r]+'")'
supportimagText.textContent=supportImagtext[r]
supportBuottom.textContent=buttonText[r]
    }else{
        supportBcimag.style.backgroundImage='url("../imag/'+supportImag[r]+'")'  
        supportimagText.textContent=supportImagtext[r]
        supportBuottom.textContent=buttonText[r]
    }
},10000)
/*End the support page*/
/*Start the News page*/
let nEws=document.querySelector('.news') 
let newsPage=document.querySelector('.news-page')
let newsImag=['../imag/pexels-musa-zanoun-9932963.jpg','../imag/destruction-8221323.jpg','../imag/war-6258028.jpg']

let n=0
setInterval(()=>{

n++
    if(n>=newsImag.length){
n=0
newsPage.style.backgroundImage='url("../imag/'+newsImag[n]+'")'
    }else{
        newsPage.style.backgroundImage='url("../imag/'+newsImag[n]+'")'  
    }
},5000)

/*End the News page*/ 