// What Is a While Loop, and How Does It Differ from the Do...while Loop?

let counter = 1;
while(counter < 5){
    console.log(counter);
    counter++;
}

counter = 2;
do {
    console.log(counter);
    counter++;
    
} while(counter <0) 

// What Are the Break and Continue Statements Used for in Loops?
for(let i = 0; i <=10; i++){
    if(i===5){
        break;
    }
    console.log(i);
    
}
for( i = 0; i <=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
    
}

outerloop: for (let i = 0; i < 3; i++ ){
    innerloop: for (let j = 0; j < 3; j++){
        if(i === 1 && j === 1){
            break outerloop;
        }
        console.log(`i: ${i}, j: ${j}`);
        
    }
}

// freecodecamp exercise
function printCharacters(str){
    for(const char of str){
        console.log(char);
        
    }
}
console.log(printCharacters("hello"));

function getMatchedWordCount(sentence, match){
  let count = 0;
 
  for(let word of sentence){
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
    if(word === match){
        count++;
    }
    
       
    
  }
   return count;
}

console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"],"really"));
console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"));



// sentence analyzer
function getVowelCount(sentence){
    let count = 0
    for (let vowel of sentence.toLowerCase()){
        if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
            count ++
        }
    }
    return count
}
console.log(getVowelCount("DoyinsolA"))

let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
    let count = 0
    for (let consonant of sentence.toLowerCase()){
        if(consonant !== "a" && consonant !== "e" && consonant !== "i" && consonant !== "o" && consonant !== "u" && consonant >= "a" && consonant <= "z"){
            count ++
        }
    }
    return count
}
console.log(getConsonantCount("DoyinsolA"))
console.log(getConsonantCount("Coding is fun!"));

let consonantCount = getConsonantCount("Coding is fun!");
console.log(`Consonant Count: ${consonantCount}`)

function getPunctuationCount(sentence){
    let count = 0
    for (let punctuation of sentence.toLowerCase()){
        if( !(punctuation >= "a"  && punctuation <= "z")&& punctuation !== " "){
            count ++
        }
    }
    return count
}
let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`)

 function getWordCount(sentence){
    sentence = sentence.trim();
    if (sentence === ""){
        return 0
    }

   let word = sentence.split(" ");
   return word.length
 }
 console.log(getWordCount(" Doyinsola is beautiful"));
 let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`)