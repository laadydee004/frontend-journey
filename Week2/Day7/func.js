// Function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Doyinsola");
greet("Alice");
greet("Welcome to the world of Java");

let result = greet();
console.log(result);


function calculateSum(num1,num2){
    return num1 + num2;
}
console.log(calculateSum(5,8));
let resultSum = calculateSum(4,7);
console.log(resultSum);

// anonymous function

const sum = function (num1, num2) {
    return num1 + num2;
}
console.log(sum(10,23));
console.log(sum(100,4));

let sub = function (num1, num2){
    return num1 - num2;
}
console.log(sub(50,50));

sub = function (num1, num2) {
    return num1 - (num1 - num2);
}
console.log(sub(200,4));


function department(course = "your choice") {
    let upperCourse = course.toUpperCase();
    return "Welcome to the department of " + upperCourse;
}
console.log(department());
console.log(department("Computer Science"));


function multiply (num1, num2 = 8){
    return num1 * num2;
}
console.log(multiply(5));
console.log(multiply(5,10));

// What Are Arrow Functions, and How Do They Work?

const greetings = (name) => {
    return `Welcome Back ${name}`; 
}
console.log(greetings("Doyinsola"));

// What Is Scope in Programming, and How Does Global, Local, and Block Scope Work?

// Global Scope

const courseOfStudy = "Computer Science";
function printCourseOfStudy (){
    console.log(courseOfStudy);
}
printCourseOfStudy();

// Local Scope

function school(country) {
    const myCountry = "Nigeria";
    console.log(myCountry);
}
school();

// Block SCOPE

if (1===1){
    let name1 = "Bello Doyinsola"
    console.log(name1);
}


// Build a calculator freecodecamp exercise
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
    if(num2 === 0){
    return "Error: Division by zero";
  } else{
    return num1 / num2;
  }
  
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return Math.pow(num, 2);
}
console.log(calculateSquare(5));
console.log(calculateSquare(2));
console.log(calculateSquare(9));

const calculateSquareRoot = (num) => {
  return Math.sqrt(num);
}
console.log(calculateSquareRoot(81));
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));

// Build a Boolean Check Function freecodecamp exercise

const booWho = (num) => {
  if(num === true || num === false){
    return true;
  }
  else {
    return false;
  }
}
console.log(booWho(0));
console.log(booWho(1));
console.log(booWho("doy"));


function maskEmail (email) {
  const atIndex = email.indexOf("@");

  const userName = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const maskedUserName = userName.replace(
    /^(.)(.*)(.)$/,
    (match, first, middle, last) => first + "*".repeat(middle.length) + last
  );

  return maskedUserName + domain;
};

let email = "doyinbee004@gmail.com";

console.log(maskEmail(email));


let realEmail = "mercybelllz@gmail.com";
function emailz (emaill){
  let indexAt2 = realEmail.indexOf("@");
  let userEmail = realEmail.slice(0,indexAt2);
  let domain2 = realEmail.slice(indexAt2);
  let userEmailAsterik = `${userEmail[0]}${userEmail[1],"*".repeat(userEmail.length-2)}${userEmail[userEmail.length-1]}`;
  let realEmailDisplay = `${userEmailAsterik}${domain2}`;
  return realEmailDisplay;
}

console.log(emailz());
realEmail = "ajoke@hook.com"
console.log(emailz());

