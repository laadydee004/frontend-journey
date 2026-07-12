// chatgpt exercise

gameQuestion = [
  {
    category: "English",
    question: "What is the opposite (antonym) of generous?",
    choices: ["Kind","Selfish","Honest","Friendly"],
    answer: "Selfish"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth","Mars","Jupiter","Venus"],
    answer: "Mars"
  },
  {
    category: "General Knowledge",
    question: "What is the capital city of Nigeria?",
    choices: ["Lagos","Kano","Abuja","Oyo"],
    answer: "Abuja" 
  },
  {
    category: "General Knowledge",
    question: "How many days are there in a leap year?",
    choices: [365,364,366,367],
    answer: 366 
  },
  {
    category: "Science",
    question: "Which planet is closest to the Sun?",
    choices: ["Venus","Mercury","Earth","Mars"],
    answer: "Mercury"  
  },
  {
    category: "General Knowledge",
    question: "Which instrument measures temperature?",
    choices: ["Barometer","Thermometer","Hygrometer","Compass"],
    answer: "Thermometer"  
  },
  {
    category: "General Knowledge",
    question: "Which country has the largest population?",
    choices: ["United States","India","Brazil","Russia"],
    answer: "India"  
   
  },
  {
    category: "General Knowledge",
    question: " Which language has the most native speakers in the world?",
    choices: ["English","Spanish","Mandarin Chinese","French"],
    answer: "Mandarin Chinese"  
  }
]


let score = 0;

function finalScore(gameQuestion,score) {
  const gameQuestionIndex = Math.floor(Math.random() * gameQuestion.length)
  const gameQuestions = gameQuestion[gameQuestionIndex]
  const gameRandomChoices = gameQuestions.choices
  const gameQuestionChoicess = Math.floor(Math.random() * gameRandomChoices.length)
  const choicesOption = gameRandomChoices[gameQuestionChoicess]
  const gameRandomQuestion = gameQuestions.question
  
   console.log(gameRandomQuestion);
   console.log(choicesOption);
   
   
  if(choicesOption === gameQuestions.answer)
  {
    return score + 1;
  }
  else{
    return score
  }
  
  
}
console.log(finalScore(gameQuestion,score));

