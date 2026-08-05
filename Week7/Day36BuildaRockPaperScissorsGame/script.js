const rulesBtnContainer = document.querySelector(".rules-btn-container");
const rules = document.querySelector(".rules");
const rulesBtn = document.querySelector(".rules-btn");
rulesBtnContainer.addEventListener("click", () =>{
    rules.classList.toggle("show");
    
})


const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult(){
        const randomIndex = Math.floor(Math.random() * options.length);  
        return options[randomIndex];
}
console.log( getRandomComputerResult(options));

function hasPlayerWonTheRound(playerChoice, computerChoice){
 
  return ((playerChoice === "Rock" && computerChoice === "Scissors")|| (playerChoice === "Scissors" && computerChoice === "Paper")|| (playerChoice === "Paper" && computerChoice === "Rock"))
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");

const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption){
     roundResultsMsg.textContent =  getRoundResults(userOption) ;
     playerScoreSpanElement.textContent = playerScore;
     computerScoreSpanElement.textContent = computerScore;
     if(playerScore === 3 || computerScore === 3){
       winnerMsgElement.textContent = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`
        resetGameBtn.style.display = "block"
        optionsContainer.style.display = "none"
     }
    //  if(playerScore === 3){
    //   winnerMsgElement.textContent = "Player has won the game!";
    //   resetGameBtn.style.display = "block"
    //   optionsContainer.style.display = "none"
    //  }
    //  if(computerScore === 3){
    //   winnerMsgElement.textContent = "Computer has won the game!";
    //   resetGameBtn.style.display = "block"
    //   optionsContainer.style.display = "none"
    //  }
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => {
  showResults("Rock");
});
paperBtn.addEventListener("click", () => {
  showResults("Paper");
});
scissorsBtn.addEventListener("click", () => {
  showResults("Scissors");
});

const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function resetGame (){
   playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  winnerMsgElement.textContent = ""
   roundResultsMsg.textContent = ""
   optionsContainer.style.display = "block"
    resetGameBtn.style.display = "none";
}

resetGameBtn.addEventListener("click", () => resetGame() )