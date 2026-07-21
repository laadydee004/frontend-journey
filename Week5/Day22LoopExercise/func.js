// Build a Proofreading Tool

function isPalindrome(word){
  let palindrome = true;
  let original = word.toLowerCase().split("")
  let copyOriginal = [...original]
  let reversed = copyOriginal.reverse()
  original = original.join("")
  reversed = reversed.join("")
  if(original === reversed){
    return palindrome
  }
  else{
    return false
  }
 
}
console.log(isPalindrome("hello"))

function findPalindromeBreaks(words){
  let breaks = [];
  for(let i = 0; i < words.length; i++){ let word = words[i]
    
    if(isPalindrome(word) === false){
      breaks.push(i)
    }
  }
  return breaks
}

console.log(findPalindromeBreaks(["joy", "Doy","Level"]))


function findRepeatedPhrases(words,phraseLength){
  let phrases = []
  let result = []
  let lastIndex = words.length - phraseLength
  for(let i = 0; i <= lastIndex; i++){
   let phrase = words.slice(i,i + phraseLength)
     phrase = phrase.join(" ")
   phrases.push(phrase)
  } 
  for(let i = 0; i < phrases.length; i++){
    for(let j = i + 1; j < phrases.length; j++){
      if(phrases[i] === phrases[j]){
        result.push(i,j)
      }
    }
   }
  return result
}
console.log(findRepeatedPhrases(["I","love","to","code","I", "love", "to", "learn"],2))

function analyzeTexts(texts, phrasesLength){
  let text = [];
  for(let i = 0; i < texts.length; i++){ let currentText = texts[i]
    let palindromeBreaks = findPalindromeBreaks(currentText)
    let repeatedPhrases = findRepeatedPhrases(currentText,phrasesLength)
    let result = {
      palindromeBreaks,
      repeatedPhrases
    }
    text.push(result)
  }
  return text
} 