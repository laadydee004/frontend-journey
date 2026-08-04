const textInput = document.getElementById("text-input");
const countChar = document.getElementById("char-count");

textInput.addEventListener("input",(event) => {
    const currcount = event.target.value.length 
    
    if(currcount > 50){
       textInput.value = textInput.value.slice(0,50);
       currcount = 50;
    }
    countChar.innerHTML = ` <p class="count" id="char-count">Character Count: <span>${currcount}/50</span></p>`
    console.log(currcount);
})

