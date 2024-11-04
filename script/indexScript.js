

document.addEventListener("DOMContentLoaded", function() {
    var icon_mod = document.querySelector(".icon_mod img");

        if (localStorage.dark == 1) {
            document.body.classList.add('dark');
            icon_mod.src = "images/dark mode.svg";
            home_section01.style.backgroundImage = "url('images/background_section01_dark.jpg')"; 
        }
        else{
            
        }

});


let cards = document.querySelectorAll(".card");

const inputUtilsateur = document.getElementById("inputUser");

inputUtilsateur.addEventListener('input',function(){
    const inputUser = inputUtilsateur.value.toLowerCase();
    
    cards.forEach(function(card) {
        let title = card.querySelector("h2").innerText.toLowerCase();
        
        if (title.includes(inputUser)) {
            card.style.display = ""; 
        } else {
            card.style.display = "none";
        }
    });
});



let carouselContainer=document.querySelector(".carouselContainer");

function startCarousel() {
    carouselContainer.animate(
        [
            { transform: 'translateX(0)' },                   
            { transform: 'translateX(-100%)' }                
        ],
        {
            duration: 10000,          
            iterations: Infinity      
        }
    );
}

startCarousel();

var icon_mod=document.querySelector(".icon_mod img");
const home_section01=document.querySelector(".home_section01");

icon_mod.addEventListener("click",(e)=>{
     document.body.classList.toggle('dark');
     if(document.body.classList.contains('dark')){
        icon_mod.src="images/dark mode.svg";
        localStorage.dark=1;
        home_section01.style.backgroundImage = "url('images/background_section01_dark.jpg')";     
     }
     else{
        icon_mod.src="images/light mode.svg";
        home_section01.style.backgroundImage = "url(images/background_section01.jpg)";
        localStorage.dark=0;
     }
});