const checkBtn = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

const palindromeReg = /^[a-z0-9]$/i



checkBtn.addEventListener("click",()=>{
    if(textInput.value === ""){
        alert ("Please input a value");
        return
    }
    if(palindromeReg.test(textInput.value) === true){
        result.textContent = textInput.value + " is a palindrome"
        
    }
   const originalText = textInput.value.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reverseText = originalText.split("").reverse().join("");
    if(originalText === reverseText){
         result.textContent = textInput.value + " is a palindrome"
    }
    else{
        result.textContent = textInput.value + " is not a palindrome" 
    }
})