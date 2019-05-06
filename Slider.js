// SlideShow!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
        
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (var i=0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display="block";
    
} 

// Выбор начинки!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var buttons = document.getElementsByClassName("firstStep");


for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", start);
}

function start() {
    var par = this.parentNode;
    var t = par.getElementsByTagName("h5")[0].innerHTML;
    var result = document.getElementById("orderContext");
    result.value = t;
}

// Выбираем размер. Шаг второй!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
var size = document.getElementsByTagName("svg");
var pinks = document.getElementsByClassName("pink");

for (var i=0; i<size.length; i++) {
    size[i].addEventListener("click", mark);
    size[i].addEventListener("click", second);
}

function second() {
    var par = this.parentNode;
    var t = par.getElementsByClassName("center");
    var result = document.getElementById("orderSize");
    result.value = t[0].textContent;
    var pink = this.getElementsByClassName("pink");
    pink[0].style.fill = "#fbebea";
    
}
function mark() {
   for (var i=0; i<pinks.length; i++) {
    pinks[i].style.fill = "none"   
   }
}

// Новый слайдер!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var sI = 1;
showDecor(sI);

function changeI(n){
    showDecor(sI += n);
}

function showDecor(n) {
   var slides = document.getElementsByClassName("newSlider");
        
    if (n > slides.length) {
        sI = 1;
    }
    if (n < 1) {
        sI = slides.length;
    }
    
    for (var i=0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[sI-1].style.display="grid"; 
}

// Выбираем декор!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var decor = document.getElementsByClassName("card");
for (var i=0; i<decor.length; i++) {
    decor[i].addEventListener("click", third);
}

function third() {
    var dec = this.getElementsByTagName("p");
    var res = document.getElementById("orderDesign");
    res.value = dec[0].textContent;
}

// Модальное окно!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var close = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display="block";
}
close.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none"; 
    }
    
}
// Отзывы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var voices = document.getElementsByClassName("voice");
var textReview = document.getElementsByClassName("text-review");
for (var i=0; i<voices.length; i++) {
   var longer = voices[i].getElementsByTagName("span");
    longer[0].addEventListener("click", showAll);
} 
function showAll() {
      var id = this.parentElement.id;
    if(this.textContent=="Развернуть")
    {
        console.log( TextBuffer[id] );
        this.previousSibling.textContent = TextBuffer[id].text;
        this.textContent = "Свернуть";
    }
    else if(this.textContent=="Свернуть")
    {
        
        this.previousSibling.textContent = TextBuffer[id].textCut;
        this.textContent = "Развернуть";
    }
    
      
}

var TextBuffer=[];

for (var j=0; j<textReview.length; j++) {
   
    textReview[j].id = j;
    var buffObject ={};
    buffObject.id=j;
    buffObject.text=textReview[j].firstChild.textContent;
    TextBuffer[j] =  buffObject;
   
    console.log(TextBuffer);
    var text   = textReview[j].firstChild.textContent;     
    var part = text.split(" ");
    
    var showR;
    if (part.length>26) {
    var show1 = part.slice(0, 26);
    var show2= part.slice(26, j);
    showR = show1.join(" ");   
        buffObject.textCut = showR;
    console.log(showR);    
    }
    else {
        
        showR = part.join(" ");
         buffObject.textCut = showR;
    }
    textReview[j].firstChild.textContent = showR;
    
}




// Отзывы Slider!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var viewIndex = 1;
showViews(viewIndex);

function plusViews(n){
    showViews(viewIndex += n);
}

function showViews(n) {
    var views = document.getElementsByClassName("voice");
        
    if (n > views.length) {
        viewIndex = 1;
    }
    if (n < 1) {
        viewIndex = views.length;
    }
    
    for (var i=0; i <views.length; i++) {
        views[i].style.display = "none";
    }
    views[viewIndex-1].style.display="flex";
    
} 


// Маска для поля ввода номера телефона!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

window.addEventListener("DOMContentLoaded", function(){
    var keyCode;
    function mask(event) {
       event.keyCode && (keyCode == event.keyCode);
        var pos = this.selectionStart;
        if (pos<3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a){
              return i<val.length ? val.charAt(i++) || def.charAt(i) : a
          })
        i=new_value.indexOf("_");
        if (i!= -1) {
            i<5 && (i=3);
            new_value = new_value.slice(0, i);
        }
       var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a){
           return "\\d{1," +a.length + "}"
       }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^"+reg+"$");
        if(!reg.test(this.value) || this.value.length<5 || keyCode>47 && keyCode <58) this.value = new_value;
        if (event.type == "blur" && this.value.length<5) this.value = ""        
    }
    
    
    var input = document.querySelector("#tel");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
});















































