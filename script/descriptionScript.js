
let comments=JSON.parse(localStorage.getItem("comments")) || [];

document.addEventListener("DOMContentLoaded",function(){

    comments.forEach(comment=>{
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");

    
      commentDiv.innerHTML = `
          <div>
             <img src="images/photoAnonym.jpg" alt="anonyme">
              <h4>${comment}</h4>
          </div>
      `;

      
      commentsContainer.appendChild(commentDiv);    
    })
});



if(localStorage.dark==1){
  document.body.classList.add('dark');
}


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


const btn_submit = document.querySelector(".btn_submit");
const commentInput = document.querySelector(".div_textArea textarea");
const commentsContainer = document.getElementById("commentsContainer");

btn_submit.addEventListener("click", function() {
  const commentText = commentInput.value;

  if (commentText.trim() !== "") {
    
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");

    
      commentDiv.innerHTML = `
          <div>
             <img src="images/photoAnonym.jpg" alt="anonyme">
              <h4>${commentText}</h4>
          </div>
      `;

      
      commentsContainer.appendChild(commentDiv);
      alert("votre commentaire a été ajouter avec succée");
      comments.push(commentText);
      localStorage.setItem("comments",JSON.stringify(comments));

      commentInput.value = "";
  } else {
      alert("Le commentaire ne peut pas être vide.");
  }
});

//localStorage.clear();


 



