let  lunches = [];
let string1 = "Tacos";
function addLunchToEnd(lunches,string1) {
  lunches.push(string1)
   console.log(`${string1} added to the end of the lunch menu.`)
   return lunches
}
console.log(addLunchToEnd([],"Tacos"));
console.log(addLunchToEnd(["Pizza","Tacos"],string1));

function addLunchToStart(lunches,string1){
  lunches.unshift(string1)
  console.log(`${string1} added to the start of the lunch menu.`)
     return lunches
}
console.log(addLunchToStart(["Pizza","Tacos"],string1));

function removeLastLunch(lunches) {
    let lunchLastPop = lunches.pop()
    if (lunches.length === 0) {
        console.log("No lunches to remove.")
    }else{
        console.log(`${lunchLastPop} removed from the end of the lunch menu.`)
    }
    return lunches
}
console.log(removeLastLunch(["Pizza","Tacos"]));
console.log(removeLastLunch([]));

function removeFirstLunch(lunches) {
    let lunchFirstShift = lunches.shift();
    if(lunches.length === 0){
        console.log("No lunches to remove.");
    }else{
         console.log(`${lunchFirstShift} removed from the start of the lunch menu.`);
    }
    return lunches
}
console.log(removeFirstLunch(["Pizza","Tacos"]));
console.log(removeFirstLunch([]));

function getRandomLunch(lunches) {
     let randomIndex = Math.floor(Math.random() * lunches.length);
     let randomLunch = lunches[randomIndex];
    if(lunches.length === 0){
        console.log("No lunches available.");
    }else{
         console.log(`Randomly selected lunch: ${randomLunch}`);
    }
    return lunches
}
console.log(getRandomLunch(["Pizza","Tacos"]));
console.log(getRandomLunch([]));

function showLunchMenu(lunches) {
    if(lunches.length === 0 ){
        console.log("The menu is empty.");
    }
    else {
        console.log(`Menu items: ${lunches.join(", ")}`);
    }
   
}
console.log(showLunchMenu(["Yam","Egg","Beans","Rice"]));
console.log(showLunchMenu([]));

// Build a Golf Score Translator
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
let parCourse = 4;
let strokeAmount = 1;
function golfScore(parCourse,strokeAmount) {
  if(strokeAmount === 1){
   return "Hole-in-one!"
  }else if(strokeAmount <= parCourse -2 ){
     return "Eagle";
  }else if(strokeAmount === parCourse -1 ){
     return "Birdie";
  }else if(strokeAmount === parCourse){
     return "Par";
  }else if(strokeAmount === parCourse + 1){
     return "Bogey";
  }else if(strokeAmount === parCourse + 2){
     return "Double Bogey";
  }else if(strokeAmount >= parCourse + 3){
     return "Go Home!";
  }
}
console.log(golfScore(4,2))


// How Do You Get the Index for an Element in an Array Using the indexOf Method?
let fruits = ["Apple","Orange","Banana","Cherry","Watermelon"];
let index = fruits.indexOf("Banana");
console.log(index);
console.log(fruits[index]);
index = fruits.indexOf("grape");
console.log(index);
console.log(fruits[index]);


let colors = ["red", "green", "blue", "yellow", "green"];
let indexx = colors.indexOf("green", 3);
console.log(indexx); 

let fruits2 = ["Apple", "Orange", "Banana", "Cherry", "Watermelon", "Grape"];
let index1 = fruits2.indexOf("Orange", 2);
console.log(index1);
index1 = fruits2.indexOf("Watermelon",2);
console.log(index1);

// How Do You Add and Remove Elements from the Middle of an Array?
let allStudentNames = ["Doyinsola","Oyindamola","Mojoyinola","Oyinlola","Oluwakemi","Abidemi"];
let removed = allStudentNames.splice(2,2);
console.log(allStudentNames);
console.log(removed);
removed = allStudentNames.splice(2);
console.log(allStudentNames);
removed = allStudentNames.splice(0,2);
console.log(allStudentNames);
allStudentNames = ["Doyinsola","Oyindamola","Mojoyinola","Oyinlola","Oluwakemi","Abidemi"];
allStudentNames.splice(1,0,"Teniola","Racheal");
console.log(allStudentNames);

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

console.log(numbers);
numbers = [1, 2, 3, 4, 5];
let copy = [...numbers];
copy.splice(1, 2, 6, 7, 8);
console.log(copy);
console.log(numbers);

let fruits1 = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits1.indexOf("orange");
if (indexToRemove !== -1) {
    fruits1.splice(indexToRemove, 1);
}

console.log(fruits1); 
fruits1 = ["apple", "banana", "orange", "mango","Grape"];
indexToRemove = fruits1.indexOf("Grape");
console.log(fruits1); 

let numbers2 = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers2.includes(30, 3)); 
console.log(numbers2.includes(30, 4));

// What Is a Shallow Copy of an Array, and What Are Some Ways to Create These Copies?
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray);
console.log(copyArray === originalArray);

const originalArray1 = [1, 2, 3];
const copyArray1 = originalArray1.slice();

console.log(copyArray1);
console.log(copyArray1 === originalArray1); 




