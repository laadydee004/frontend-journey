const button = document.querySelectorAll(".btn");
button.forEach((btn) => {
    btn.addEventListener("click",() =>{
   const liked =  btn.classList.toggle("show");
    btn.innerHTML = liked ? "&#10084;" : "&#9825;";
}) ;
});



// "&#10084