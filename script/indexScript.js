

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

let icon_mod=document.querySelector(".icon_mod img");
console.log(icon_mod);

icon_mod.addEventListener("click",(e)=>{
     document.body.classList.toggle('dark');
     if(document.body.classList.contains('dark')){
        icon_mod.src="images/dark mode.svg";
     }
     else{
        icon_mod.src="images/light mode.svg";
     }
});