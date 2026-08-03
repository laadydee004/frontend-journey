const selectMenu = document.querySelector("#select-menu");
selectMenu.addEventListener("change",(event) =>{
    console.log(`you selected ${event.target.value}`);
    
});

const inputName = document.querySelector(".inputName");
inputName.addEventListener("input", (event) =>{
    console.log(`${event.target.value}`);
    
})
inputName.addEventListener("paste", (event) =>{
    console.log(`${event.clipboardData.getData("text")}`);
    
})


// How Do Event Bubbling, and Event Delegation Work?

const para = document.querySelector("p");
const span = document.querySelector("span");
para.addEventListener("click",(event) =>{
    console.log(`P listener:`);
    event.target.style.color = "red";
    console.log(event.target);
    
})
// span.addEventListener("click",(event) =>{
//     console.log(`span listener:`);
//     console.log(event.target);
//     // console.log(event.stopPropagation());
//     // event.target.style.color = "red"
    
    
// })


