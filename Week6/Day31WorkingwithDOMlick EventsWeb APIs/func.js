// How Do the Navigator, Window, and Document Work?
// Navigatior
console.log(navigator.userAgent);
console.log(navigator.language);

// Window
console.log(window.innerWidth);
console.log(window.location);
console.log(location);

// Document
console.log(document.children);

const para = document.getElementById("para");
para.setAttribute("class", "my-class");
console.log(para.outerHTML);

const secOne = document.querySelector(".secOne");
secOne.setAttribute("class","SectionOne");
secOne.setAttribute("title","I'm a section");
console.log(secOne.outerHTML);

// What Is the Event Object?
// All Event objects will have the type property

// How Does the addEventListener Method Work?

// The addEventListener() method is used to listen for events. 
// element.addEventListener("event", listener);


// element.addEventListener("click", () => {
//   // code to run when the click event occurs
// });
// You can also choose to pass in a function reference like this:

// function handleClick() {
//   // code to run when the click event occurs
// }

// element.addEventListener("click", handleClick);

const btn = document.getElementById("btn");
btn.addEventListener("click",() => alert ("You Clicked the button"))

const input = document.getElementById("input");
input.addEventListener("input",() => console.log(input.value));

// There are many more events that you can listen for using the addEventListener() method. Some common events include mouseover, mouseout, keydown, keyup, and submit.




// How Does the removeEventListener Method Work?
const bodyE1 = document.querySelector("body");
const btn2 = document.getElementById("btn2");
let isbgColorPurple = true;
function toggleBgColor(){
    bodyE1.style.backgroundColor = isbgColorPurple ? "blue" : "purple";
    isbgColorPurple = !isbgColorPurple;
}
btn2.addEventListener("click", toggleBgColor);

const parag = document.getElementById("parag");
parag.addEventListener("mouseover",() => {
    console.log("Mouse is over the paragraph");
    btn2.removeEventListener("click",toggleBgColor);
});


const btn3 = document.getElementById("btn3");
btn3.addEventListener("click",() => alert ("User detail not found"));

// How Do You Manipulate Styles Using Element.style and Element.classList?
const colorRed = document.querySelector("p.colorRed")
colorRed.style.color = "red";

const para2 = document.getElementById("para2");
para2.classList.add("highlight");

para2.classList.add("dev","des","prog");

para2.classList.remove("highlight");


const  toggleBtn = document.getElementById("toggle-btn");
const menu = document.getElementById("menu");
toggleBtn.addEventListener("click", () => menu.classList.toggle("show")); 



// What Is the DOMContentLoaded Event, and How Does It Work?

document.addEventListener("DOMContentLoaded", () => {
    console.log("Dom is loaded");
    
})


function changeImg (){
    const img = document.getElementById("example-img");
    img.src = "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg"
    img.alt = "cambot img"
    console.log("we just change image");
    
}

 changeImg ()


 if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded",changeImg);
 }else {
    console.log("DOMContentLoaded has already fired");
    changeImg();
 }



//  How Do the setTimeout and setInterval Methods Work?
setTimeout(function(){
     console.log("This runs after 30 seconds");
}, 30000);

setTimeout(function(){
    const message = document.getElementById("welcome-message");
    return message.classList.add("show");
}, 5000) 

setInterval(()=>{
    const message = document.getElementById("welcome-message");
     console.log("This runs after 5 seconds");
     message.classList.add("show"); 
},5000);


// What Is the requestAnimationFrame() API, and How Can It Be Used to Set Up an Animation Loop?
function animate() {
 // Update the animation...
 // for example, move an element, change a style, and more.
 update();
 // Request the next frame
 requestAnimationFrame(animate);
}

const rect = document.getElementById("rect");
let position = 0;
function update() {
    rect.style.left = position + "px";
    position += 5;
     if(position > window.innerWidth){
        position = -rect.offsetWidth
    }
} 

function animate() {
    update();

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);


// What Is the Web Animations API, and How Does It Relate to CSS Animation Properties?
// instance -play(),pause(),reverse(),finish(),cancel()
// prop -playbackRate,currentTime,startTime,effect,timeline,playState,finished,onfinish,oncancel
const square = document.getElementById("square");
const animation = square.animate(
    [{transform: "translateX(0rem)"},{transform: "translateX(30rem)"}],
    {
        duration: 2000, // makes the animation last 2 seconds
        iterations: Infinity,  // loops indefinitely
        direction: "alternate",  // moves back and forth
        easing: "ease-in-out"        //smooth easing
    }
)


const square2 = document.querySelector(".square2");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const animation2 = square2.animate([{transform: "translateX(0px)"},{transform:"translateX(200px)"}],
    {
        // iterations: 5000,
        duration: 5000,
        direction: "alternate",
        easing: "ease-in-out"
    }
);

animation2.pause();
playBtn.addEventListener("click",() => {
    animation2.play();
    console.log("You start the animation");
});

pauseBtn.addEventListener("click",() => {
    animation2.pause();
    console.log("You pause the animation");
})

animation2.onfinish = () => {
    console.log("Animation finished!");
}


// What Is the Canvas API, and How Does It Work?
const myCanvas = document.getElementById("my-canvas");
myCanvas.height = 300;
myCanvas.width = 300;

const ctx = myCanvas.getContext("2d");
console.log(ctx);
ctx.fillStyle = "red";
ctx.fillRect(1, 1, 150, 100);



const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext("2d");

// Set font family and size
textCanvasCtx.font = "30px Arial";

// Set text color
textCanvasCtx.fillStyle = "crimson";

// Draw the text
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);


// How Do You Open and Close Dialog Elements Using JavaScript?
// const modal = document.getElementById("my-modal");
// modal.showModal()


const dialog = document.getElementById("modal2");
const closeBtn = document.getElementById("close-modal-btn");
const openBtn = document.getElementById("open-modal-btn");

closeBtn.addEventListener("click",() =>{
    dialog.close()
})
openBtn.addEventListener("click",() =>{
    dialog.show()
})
