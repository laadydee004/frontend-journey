
const menuBar = document.querySelector(".menu-bar");
const menuContent = document.querySelector(".menu-content");
menuBar.addEventListener("click",() =>{
    menuContent.classList.toggle("show");
})

const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const playerCard = document.querySelectorAll(".player-card");
const playerImage = document.querySelector(".player-image");
const imageItems = document.querySelectorAll(".image-item");
playerCard.forEach((card) => {
    card.addEventListener("click", () =>{
        sidebar.style.display = "block"
        content.style.display = "flex"
    })
})

imageItems.forEach((imageItem) => {
    imageItem.addEventListener("click",() =>{
        playerImage.src = imageItem.src
    })
})

const backToggle = document.querySelector(".back-toggle");
backToggle.addEventListener("click",()=>{
     sidebar.style.display = "none"
     content.style.display = "block"
})

const positionDefender = document.querySelector(".position-defender");
const position = document.querySelector(".position");
positionDefender.addEventListener("click",()=>{
    position.value 
})