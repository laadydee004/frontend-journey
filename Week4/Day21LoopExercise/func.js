// Build a Missing Letter Detector
function fearNotLetter (letters){
  let current = ""
  let next = ""
  for(let i = 0; i < letters.length -1 ; i++){

     current = letters[i].charCodeAt(0)
     next = letters[i+1].charCodeAt(0)
     if(next - current > 1){
       return String.fromCharCode((current + 1))
     }
  }
  
}

console.log(fearNotLetter ("abcdefh"));