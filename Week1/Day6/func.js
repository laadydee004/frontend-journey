// Freecodecamp exercise
let botName = "MathBot";
let greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

let randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

let min = 1;
let max = 100;

let randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

let numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

let randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

let numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log("The Math.round() method rounds the value to the nearest whole integer.");

let numRounded = Math.round(2.7);
console.log(numRounded);

let numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

let maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);

let minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);
console.log("It was fun learning about the different Math methods with you!");

// Build a Fortune Teller

let fortune1 = "Your cat will look very cuddly today."
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon."
let fortune5 = "It would be wise to avoid the color red today."


let randomNumber =Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1){
  selectedFortune = fortune1;
} else if (randomNumber === 2){
  selectedFortune = fortune2;
}
  else if (randomNumber === 3){
  selectedFortune = fortune3;
}
  else if (randomNumber === 4){
  selectedFortune = fortune4;
}
  else if (randomNumber === 5){
  selectedFortune = fortune5;
} else {
  console.log("No number is picked");
}

console.log(selectedFortune);

console.log(5/0);


// What Are Switch Statements and How Do They Differ from If/Else Chains?
let dayOfWeek = 3;
switch(dayOfWeek){
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");

}

