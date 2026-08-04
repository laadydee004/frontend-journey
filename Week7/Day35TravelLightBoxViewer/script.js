const lightBox = document.querySelector(".light-box");
const closeBtn = document.querySelector(".close-btn");

const lightboxImage = document.querySelector(".lightbox-image");
const imageItems = document.querySelectorAll(".image-item");

imageItems.forEach((image)=> {
    image.addEventListener("click",() =>{
        lightBox.style.display = "block";
        lightboxImage.src = image.src
    });
})

closeBtn.addEventListener("click",(event) =>{
     event.stopPropagation();
     lightBox.style.display = "none";
    });


lightBox.addEventListener("click",() =>{
        lightBox.style.display = "none";
    });
