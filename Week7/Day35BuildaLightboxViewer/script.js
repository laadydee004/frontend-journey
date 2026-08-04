const galleryItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const closebtn = document.querySelector("#close-btn");
const lightboximage = document.querySelector("#lightbox-image");

galleryItem.forEach((item) =>{
    item.addEventListener("click",() => {
    lightbox.style.display = "flex";
    lightboximage.src = item.src.replace("-thumbnail", "");

})
})
closebtn.addEventListener("click",(event) => {
    event.stopPropagation();
    lightbox.style.display = "none";
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});