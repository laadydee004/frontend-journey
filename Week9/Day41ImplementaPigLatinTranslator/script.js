function translatePigLatin(string){
  let consonant = /[^aeiou]/i
  let vowelIndex = string.search(/[aeiou]/i);
  console.log(vowelIndex)
   if(vowelIndex === -1){
   return string + "ay"
 }
   if(consonant.test(string[0])){
    return string.slice(vowelIndex) + string.slice(0,vowelIndex) + "ay"
  } 

  else{
   return string + "way"
  }
}

console.log(translatePigLatin("california")); 
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("rhythm")); 