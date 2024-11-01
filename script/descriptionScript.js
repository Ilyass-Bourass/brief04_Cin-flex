

// let cards = document.querySelectorAll(".card");

// const inputUtilsateur = document.getElementById("inputUser");

// inputUtilsateur.addEventListener('input',function(){
//     const inputUser = inputUtilsateur.value.toLowerCase();
    
//     cards.forEach(function(card) {
//         let title = card.querySelector("h2").innerText.toLowerCase();
        
//         if (title.includes(inputUser)) {
//             card.style.display = ""; 
//         } else {
//             card.style.display = "none";
//         }
//     });
// });

let stars=document.querySelectorAll(".stars i");

console.log(stars);
stars.forEach((star,index1)=>{

    star.addEventListener("click",function(){
        
        stars.forEach((star,index2)=>{
            index1 >= index2 ? star.classList.add("active"):star.classList.remove("active");
        });
    });

});


let carousel=document.getElementById("carousel-content");
function  scrollToLeft() {
    carousel.scrollBy({
    left: -309,
    behavior: "smooth"
  });
}

function scrollRight() {
    carousel.scrollBy({
    left: 309,
    behavior: "smooth"
  });
}


let img_coeur=document.querySelector(".div_coeur_nbrJaime img");
let span_likes=document.querySelector(".div_coeur_nbrJaime span");
console.log(span_likes);
let span_nbr_likes=parseInt(span_likes.textContent);
console.log(span_nbr_likes);

img_coeur.addEventListener("click",(e)=>{
  if(img_coeur.src.endsWith("vide.svg") ){
    span_nbr_likes++;
    span_likes.textContent=span_nbr_likes;
    img_coeur.src="images/icon_coeur_rouge.svg";
  }
  else {
    span_nbr_likes--;
    span_likes.textContent=span_nbr_likes;
    img_coeur.src="images/icon_coeur_vide.svg";   
  }
});
 



