// What Is JSON, and How Do You Access Values Using Bracket and Dot Notation?

import details from "./example.json" with { type: "json" };

console.log(details.age);
console.log(details["list of courses"]);


// How Do JSON.parse() and JSON.stringify() Work?
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

console.log(JSON.stringify(user,["name","isAdmin"]));

console.log(JSON.stringify(user, null, 3));
console.log(JSON.parse(jsonString));

// What Is the Optional Chaining Operator, and How Does It Work?
let person = {
    name: "Doyinsola",
    age: 22,
    profile: {
        email: "laadydee004@gmail.com",
        address: {
            street: "123 Main St",
            city: "ghana"
        }
    }
}

console.log(person?.name);
console.log(person?.profile?.address?.city);
console.log(person?.profile?.phone?.work);

// What Is Object Destructuring, and How Does It Work?

const personDetails = { name: "Alice", city: "New York", age: 30 };

const { name, age } = personDetails;

console.log(name); 
console.log(age);

const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: {
        brownSuger: "1 cup",
        whiteSuger: "1 cup"
    }
    
  }
};
let {ingredients: {flour}} = recipe;
console.log(flour);
let {ingredients: {sugar:{brownSuger}}} = recipe;
console.log(brownSuger);


// Build a recipe tracker
let recipes = []
let recipe1 = {
  name:"Spaghetti Carbonara",
  ingredients:["spaghetti","Parmesan cheese","pancetta","black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
}

let recipe2 = {
    name: "Chicken Curry",
    ingredients:["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""	
}
let recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients:["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""	
}

let {name:recipe1Name} = recipe1
let {cookingTime:recipe2CookingTime} = recipe2
let {ingredients:recipe3Ingredients} = recipe3
console.log(recipe1Name);
console.log(recipe2CookingTime);
console.log(recipe3Ingredients);

recipes.push(recipe1, recipe2, recipe3);
console.log(recipes);

function getTotalIngredients(ingredients){
    // let totalIngredient= [
    //     recipe1.ingredients.length,
    //     recipe2.ingredients.length,
    //     recipe3.ingredients.length
    // ] 
    return ingredients.length
}

console.log(getTotalIngredients(recipe1.ingredients));

function getDifficultyLevel(cookingTime){
    if(cookingTime <= 30){
        cookingTime = "easy";
    }
    else if(cookingTime <= 60){
        cookingTime = "medium";
    }
    else {
        cookingTime = "hard"
    }
    return cookingTime
}
console.log(getDifficultyLevel(recipe1.cookingTime));


let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
let recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
let recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(recipe1TotalIngredients);

let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
let recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
let recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = recipe1TotalIngredients
recipe2.totalIngredients = recipe2TotalIngredients
recipe3.totalIngredients = recipe3TotalIngredients

recipe1.difficultyLevel = recipe1DifficultyLevel
recipe2.difficultyLevel = recipe2DifficultyLevel
recipe3.difficultyLevel = recipe3DifficultyLevel

console.log(recipes)

// Build a Quiz Game
let questions = [
  {
     category:"Science",
     question: "What is your name?",
     choices:["Yes","No","Both"],
     answer: "Yes"
  },
  {
     category:"Science",
     question: "What is your best color?",
     choices:["Yes","No","Both"],
     answer: "Yes"
  },
  {
     category:"Science",
     question: "What is your origin?",
     choices:["Yes","No","Both"],
     answer: "Yes"
  },
  {
     category:"Science",
     question: "What is your favorite?",
     choices:["Yes","No","Both"],
     answer: "Yes"
  },
  {
     category:"Science",
     question: "how much is the price?",
     choices:["Yes","No","Both"],
     answer: "Yes"
  }
]

function getRandomQuestion(questions){
   let randomQuestionIndex = Math.floor(Math.random() * questions.length)
   return questions[randomQuestionIndex];
}
// console.log(getRandomQuestion(questions));

function getRandomComputerChoice(choices){
   let randomChoiceIndex = Math.floor(Math.random() * choices.length);
   return  choices[randomChoiceIndex]
}
console.log(getRandomComputerChoice(questions))

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

// Build a Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecord(records,id,prop,Value) {
  if(value === ""){
    delete records[id][prop]
  } else if(prop !== "tracks"){
    records[id][prop] = value;
  }else {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }

    records[id].tracks.push(value);
  }

  return records;

}


