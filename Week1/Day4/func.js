// How Can You Replace Parts of a String with Another?
let sentence = "Doyinsola is a Designer with 3 years experience";
let jobReplace = sentence.replace("Designer", "Developer");
console.log(jobReplace);

let sentence2 = "There are 4 things in the world that makes the world a safe place to be";
let updatetedSentence = sentence2.replace("world", "universe");
console.log(updatetedSentence);

// How Can You Repeat  a String ?

let myUserName = "Doyinsola ";
console.log(myUserName.repeat(5));
console.log("Developer ".repeat(2));

const organization = "freeCodeCamp";

// freecodecamp exercise

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

let repeatedLove = "love ".repeat(3)
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);

console.log(repeatedLove.repeat(3).trimEnd());
console.log(newSentence);


//Operators

let num1 = 12;
let num2 = 32;
let num3 = 61;

// Addition
let addResult = num1 + num3;
console.log(addResult);

// Subtraction 
let subResult = num2 - num3;
console.log(subResult);

// Multiplication
let mulResult = num1 * num3 * num2;
console.log(mulResult);

// Division

let divResult = num2/num1 ;
console.log(divResult);

// Remainder
let remResult = num2 % num1 ;
console.log(remResult);

// exponentiation
let expResult = num1 ** 3
console.log(expResult);
expResult = num2 ** num1;
console.log(expResult);

// mixture
let mixture = num1 + num3 * num3 + (3 ** num1);
console.log(mixture);

//  coercion
let trial = num1 + "12";
console.log(trial);

//  it convert the string to number
trial = num3 - "30";
console.log(trial);

trial = num3 - "ww";
console.log(trial);

trial = num2 * "30";
console.log(trial);

// increment

let numIncrement = num1++;
console.log(numIncrement);
console.log(num1);

let numIncrementpre = ++num2;
console.log(num2);
console.log(numIncrementpre);

let numDecrement = num1--;
console.log(numDecrement);
console.log(num1);

let numDecrementpre = --num2;
console.log(num2);
console.log(numDecrementpre);



// freecodeexercise
let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);