// Data type
// 1.Integers
console.log(50);
console.log(456);

// 2.float
console.log(15.55);
console.log(-35.45);

//3.String
console.log("My name is Doyinsola");
console.log("I love to code!");

// Object

// Object are great for grouping a related information together 
// {
//    name: "Doyinsola",
//    age: 24
// };

// Symbol

Symbol('mySymbol');

// Variable
let age;
age = 25;
console.log(age);
age = 31;
console.log(age);

const maxScore = 100;
console.log(maxScore);

// String

let singleQuote;
let doubleQuote;

singleQuote = 'This is a single quote string';
doubleQuote = "This is a double quote string";

console.log(singleQuote);
console.log(doubleQuote);

let developer = 'Angel';
console.log(developer);

developer = 'Doyinsola';
console.log(developer);

// string concatenation

let firstName = "Doyinsola";
let lastName = "Bell0";

console.log(firstName + ' ' + lastName);

let bestieFemale = 'Grace';
let bestieMale = 'Desmond';

let bestie = bestieFemale + ' ' + bestieMale;

console.log(bestie);

let greetings = 'Hello';
greetings += ', Doyinsola';

console.log(greetings);

// concat string

let department = 'Computer Science';
let classs = 'Class of 2026';

let details = department.concat(' ', classs);
console.log(details);


// console.log

let firName = 'Doyinsola';
let lasName = 'Bello';
let agge = 21;
let relationShip = 'Single';
let career = 'Dev';

console.log(firName, lasName, agge, relationShip, career);
console.log('First Name:', firName , 'Last Name:', lasName, 'Age:', agge, 'Status:', relationShip, 'Career:', career);

// Dynamic Typing in JavaScript,



// freecodecamp exercise

// Build a Sentence Maker
// In this lab, you will create two different stories using a sentence template. You will use variables to store different parts of the story and then output the stories to the console.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should declare the following variables using let:

// adjective
// noun
// verb
// place
// adjective2
// noun2
// You should assign the above variables some string values of your choice.

// You should declare a firstStory variable.

// You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";

// You should output your first story to the console using the message "First story: [firstStory]".

// You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.

// You should declare a secondStory variable.

// Create another story using the same template and assign it to the secondStory variable.

// You should output your second story to the console using the message "Second story: [secondStory]".

let adjective;
let noun;
let verb;
let place;
let adjective2;
let noun2;

adjective = "Curios";
noun = "Dragon";
verb = "Dancing";
place = "volcano";
adjective2 = "enormous";
noun2 = "marshmallows";

let firstStory; 
firstStory ="Once upon a time, there was a(n) " + adjective  + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place +  " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("First story: " + firstStory );

adjective = "Sleepy";
noun = "Unicorn";
verb = "Sneezing";
place = "Castle";
adjective2 = " Glittery ";
noun2 = "spaghetti";

let secondStory; 
secondStory = "Once upon a time, there was a(n) " + adjective  + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place +  " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("Second story: " + secondStory);


// chatgpt exercise

let myName;
myName = "Doyinsola";
console.log(myName);

let myAge;
myAge = 21;
console.log(myAge);

let num1;
let num2;
let sum;

num1 = 12;
num2 = 23;

sum = num1 + num2;
console.log('The sum of the two numbers is:', sum);

let widthNumber;
let lengthNumber;
let areaNumber;

widthNumber = 22;
lengthNumber = 11;
areaNumber = widthNumber * lengthNumber ;

console.log(areaNumber);

let celsius;
let fahrenheit;

celsius = 20;
fahrenheit = (celsius * (9/5)) + 32;

console.log(fahrenheit + "F");

if (num1 % 2 === 0) {
    console.log("Number is even");
}
else {
     console.log("Number is odd");
}
       

let swapNum1 = 12;
let swapNum2 = 15;

let swapNum = swapNum1;

swapNum1 = swapNum2;

swapNum2 = swapNum;

console.log( swapNum1);
console.log(swapNum2);

