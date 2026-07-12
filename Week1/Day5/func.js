// What Are Booleans, and How Do They Work with Equality and Inequality Operators?

let isOldEnoughToDrive = true;
if (isOldEnoughToDrive) {
    console.log("He/She is old enough to drive");
} else{
    console.log("He/She is not old enough to drive");
}

let underage = false;
if (underage ) {
    console.log("He/she is underage");
} else {
    console.log("He/she is not underage");
}

let num1 = 5;
let num2 = "5";

console.log(num1 == num2);
console.log(num1 === num2);

let num3 = 8;
let num4 = 8;

console.log(num3 = num4);
console.log(num4 === num3);
console.log(num3 == num4);

console.log(num1 != num2);
console.log(num1 !== num2);

let ayoScore = 66;
let doyScore = 89;

let highScore = doyScore > ayoScore;
let lowScore = ayoScore < doyScore;
console.log(highScore);
console.log(lowScore);

let oyinScore = 88;
let mojScore = 91;
let olaScore =77;

console.log(oyinScore >= olaScore);
console.log(mojScore <= olaScore);
console.log(oyinScore == mojScore);
console.log(oyinScore === mojScore);

// freecode exercise

let truthyOrFalsy = "freeCodeCamp";

console.log(Boolean(truthyOrFalsy));
truthyOrFalsy = "";

let  hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer." );
}let isTimmyAGamer = false;
if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

let timmyAge = 18;
if (timmyAge >= 16) {
console.log("Timmy is old enough to drive." )
}

timmyAge = 12;
console.log("Timmy is not old enough to drive.");


// unary operators
// unary plus  
let num5 = '31';
let num5ToNumber = +num5;

console.log(num5);
console.log(num5ToNumber);
console.log(typeof num5);
console.log(typeof num5ToNumber);

// minus unary
let num5ToNumberNegative = -num5;
console.log(num5);
console.log(num5ToNumberNegative);
console.log(typeof num5);
console.log(typeof num5ToNumberNegative);

// What Are Conditional Statements, and How Do If/Else If/Else Statements Work?

let kemiAge = 31;
if (kemiAge >=18 ) {
    console.log("You are eligible to vote");
    
} else {
    console.log("You are eligible to vote");
}

let score = 75;
if (score >=70 && score<=100) {
    console.log("You got an A");
} else if (score > 59 && score <= 69) {
    console.log("You got a B");
} else if (score > 49 && score <= 59) {
    console.log("You got a C");
} else if (score > 39 && score <= 49) {
    console.log("You got a D");
} else if (score == 0 && score <=39) {
    console.log("You got a F, You failed! You need to study more!");
} else {
    console.log("Invalid score");
}

// ternary operator it has 3 part , a condition ,if result is true answer and if result is false answer;
let temperature = 35;
let weather = temperature > 30? 'sunny' : 'cool';
console.log(`It's a ${weather} day`);
temperature = 10;
console.log(`It's a ${weather} day`);


// What Are Binary Logical Operators, and How Do They Work

let num7 = 9;
// AND &&
if (num1 < num7 && num3 === num4) {
    console.log("The if code will run because the both conditions are true");
} else {
    console.log(`The if code won't run`);
}

if (num1 < num7 && num3 < num4) {
    console.log("The if code will run");
} else {
    console.log(`The if code won't run`);
}

// OR ||
if (num1 < num7 || num3 < num4) {
    console.log(`The "if" code will run if one of the condition is true`);
} else {
    console.log(`The if code won't run`);
}

if (num1 > num7 || num3 < num4) {
    console.log(`The "if" code will run if one of the condition is true`);
} else {
    console.log(`The if code won't run`);
}

let userInput;
if (userInput||"Guest") {
    console.log("A user is present")
}else {
    console.log("No user detected");
    
}

if (userInput && "Guest") {
    console.log("A user is present")
}else {
    console.log("No user detected");
    
}

// // What Is the Math Object in JavaScript, and What Are Some Common Methods?
// Random

let randomNum = Math.random();
console.log(randomNum);

// min and max
let minNum = Math.min(1,2,4,0,6,21);
console.log(minNum);
minNum = Math.min(100,2,4,32,6,21);
console.log(minNum);

let maxNum = Math.max(1,2,4,0,6,21);
console.log(maxNum);
maxNum = Math.max(100,2,4,32,6,21);
console.log(maxNum);

let num9 = 3.3;
let ceilNum = Math.ceil(num9);
let floorNum = Math.floor(num9);

console.log(ceilNum);
console.log(floorNum);

const randomNumBtw1And20 = Math.ceil(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);

let randomNumberBtw10And100 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumberBtw10And100 * 10);

let randomNumberBtw5And50 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumberBtw5And50 * 5);

let randomNumberBtw20And100 = Math.floor(Math.random() * 5) + 1;
console.log(randomNumberBtw20And100 * 20);

let powerNum = Math.pow(2,3);
console.log(powerNum);

let sqrtNum = Math.sqrt(49);
console.log(sqrtNum);
sqrtNum = Math.sqrt(33);
console.log(sqrtNum);

let number1 = 27;
let cbrtNum = Math.cbrt(number1);
console.log(cbrtNum);
number1 = 100;
console.log(cbrtNum);

// chatgpt exercise
// Write a program that generate a randon number between 1 and 10
let randomBtw1to10 = Math.floor(Math.random() * 10 ) + 1;
console.log(randomBtw1to10);

