// How Does the typeof Operator Work, and What Is the typeof null Bug in JavaScript?
// typeof

let num = 2;
console.log(typeof num);

let name = "Doyinsola";
console.log(typeof name);

let num1 = 15;
let sum = num + num1;
console.log(typeof sum);

let items = "Eggs";
let totalItem = num1 + " " + items;
console.log(typeof totalItem);
console.log(totalItem);


let haveUserLoggedIn = true;
console.log( typeof haveUserLoggedIn);

// What Is Bracket Notation, and How Do You Access Characters from a String?

console.log(name[2]);
console.log(totalItem[0]);
console.log(name[name.length - 1]);


// How Do You Create a Newline in Strings and Escape Strings?
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you, \nDoyinsola is a developer.";
console.log(poem);

let available = "The available Dev is \"Doyinsola\" ";
console.log(available);
console.log('That\'s her name');

const name1 = "Alice";
const greeting = `Hello, ${name1} !`;

console.log(greeting); 


let poem1 = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem1);

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
// STRING METHOD
let sentence = "Doyinsola is very intelligent";
let posotion = sentence.indexOf("intelligent");
console.log(posotion);

let scholarship = "Scholarship is available for 18+ individual";
posotion = scholarship.indexOf("individual");
console.log(posotion);

// prompt USUAGE
const btn = document.getElementById("prompt-btn");
const output1 = document.getElementById("output");
btn.addEventListener("click",() => {
    const userName = prompt("What is your name ?", "Guest");
    output1.textContent = `Hello, ${userName} !`;
});


// FREECODE EXERCISE
console.log("Hi there!");

const botName = "teacherBot";

const greeting1 = `My name is ${botName}.`;
console.log(greeting1);

const subject = "JavaScript";
const topic = "strings";

const sentence1 = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence1);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.")


// chatgpt day2 task

const firstName = "Doyinsola";
const lastName = "Bello";
const age = 21;
let dreamJob = "Frontend Developer";

console.log("Hello! My name is " + firstName + " " + lastName + "." + "\nI am " + age + " years old. \nMy dream job is to become a " + dreamJob);


console.log(`Hello! My name is ${firstName} ${lastName}.
I am ${age} years old.
My dream job is to become a ${dreamJob}.`);


