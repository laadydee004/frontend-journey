// There are various types of third-party web APIs, including weather APIs, social media APIs, payment APIs, data APIs, translation APIs, and more. You just need to find the API that fits your needs.

// Document Object Model.  (DOM)
const con = document.getElementById("container")
console.log(con);

const sec = document.querySelector("section")
console.log(sec);


const breadIngredients = document.querySelectorAll("ul.ingredients li");
console.log(breadIngredients);
console.log(breadIngredients.length);
console.log(breadIngredients[0]); 

for(let i = 0; i < breadIngredients.length; i++){
   console.log(breadIngredients[i]);
    
}

// How Do You Create New Nodes Using innerHTML and createElement()?

const section2 = document.getElementById("section2");
section2.innerHTML = "<h1>My Name is Doyinsola</h1> <p>i am a female, i'm trying to learn javaScript. i'm currently on DOM in JavaScript</p> <ul><li>querySelectorAll</li><li>getElementById</li><li>createElement</li><li>innerHTML</li></ul>"

console.log(section2);

const img = document.createElement("img");
img.src = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg";
img.alt = "Strawberry image";
section2.appendChild(img)

console.log(section2);


// What Is the Difference Between innerText, textContent, and innerHTML?
// innerText
const section3 = document.getElementById("section3");
console.log(section3.innerText);

const section4 = document.getElementById("section4");
console.log(section4.innerText);

section4.innerText = "JavaScript is awesome";

console.log(section4);

// textContent

const section5 = document.getElementById("section5");
console.log(section5.textContent);

const section6 = document.getElementById("section6");
console.log(section6.textContent);

section6.textContent = "JavaScript is awesome";

console.log(section6); 

// How Do You Add and Remove Nodes from the DOM with appendChild() and removeChild()?
// Add
const ingredients = document.getElementById("ingredient");
const anotherList = document.createElement("li");
ingredients.appendChild(anotherList)
anotherList.textContent = "groundnutOil"
console.log(ingredients);

//  Remove 

const exeRemove = document.getElementById("example-section");
const lastParagaph = document.querySelector("#example-section p:last-of-type");

exeRemove.removeChild(lastParagaph)
