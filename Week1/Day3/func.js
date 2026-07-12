// ASCII
let letter = "A";
console.log(letter.charCodeAt(0));

let word = "Doyinsola"
console.log(word.charCodeAt(2));

let letter2 = "D";
console.log(letter2.charCodeAt(0));

let symbol = "!";
console.log(symbol.charCodeAt(0));

let char = String.fromCharCode(65);
console.log(char); 

let char1 = String.fromCharCode(100);
console.log(char1);

console.log(String.fromCharCode(66));


// How Can You Test if a String Contains a Substring?

let category = "Doyinsola is part of the international student";
let result = category.includes("international");
console.log(result);

result = category.includes("International");
console.log(result);

console.log(category.includes("international", 8));

// How Can You Extract a Substring from a String?

console.log(category.slice(0,5));

console.log(category.slice(25,38));
console.log(category.slice(38));

let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted);

// freecode exercise 

const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log(`Workshop complete! You now know how to use includes() and slice().`);

// How Can You Change the Casing for a String?
// Uppercases
let schoolName = "Ladoke Akintola University Of Technology";
let upperCasesSchoolName = schoolName.toUpperCase();
console.log(upperCasesSchoolName);

// lowercases
let course = "I'm learning Javascript From FREECODECAMP WEBSITE";
let lowerCasesCourse = course.toLowerCase();
console.log(lowerCasesCourse);

// How Can You Trim Whitespace from a String?

let word2 = "  hi, Doyinsola  ";
console.log(word2.trim());

// FREECODE EXERCISE 2
const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

let lowercaseWord = "camelcase";
let camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase()
console.log("Camel cased version:");
console.log(camelCasedVersion);
camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);

// chatgpt exercise

let userName = "  Doyinsola  ";
let removeSpace = userName.trim();
console.log(removeSpace);
let convertToUpper = removeSpace.toUpperCase();
console.log(convertToUpper);
console.log(convertToUpper.includes("YIN"));
