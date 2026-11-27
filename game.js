const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const gameResultDisplay = document.querySelector("#game-result");
const roundCount = document.querySelector("#round-count");

let humanScore = 0;
let computerScore = 0;
let round = 0;

displayScoresAndRound();

function playGame () {
    
    handleHumanChoice(rock,"rock");
    handleHumanChoice(paper,"paper");
    handleHumanChoice(scissors,"scissors");

}

playGame();

function getComputerChoice () {
    let num = Math.random();
    
    if (num < 1/3) {
        return "rock";
    } else if (num >= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function displayScoresAndRound () {
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundCount.textContent=`Round: ${round}`;
}

function handleHumanChoice (choiceVar,choiceString) {
    choiceVar.addEventListener("click", () => {
        playRound(getComputerChoice(),choiceString);
        
        
    })
}

function playRound (computerSelection ,humanSelection) {

    gameResultDisplay.textContent="";
    
    if (computerSelection === humanSelection) {
        console.log("Draw!");
        roundResult.textContent=`Draw!`;
        round++;
    } else if (humanSelection==="rock" && computerSelection==="paper") {
        console.log("You Lose! Paper beats Rock");
        roundResult.textContent=`You Lose! Paper beats Rock`;
        computerScore++;
        round++;
    } else if (humanSelection==="rock" && computerSelection==="scissors") {
        console.log("You Win! Rock beats Scissors");
        roundResult.textContent=`You Win! Rock beats Scissors`;
        humanScore++;
        round++;
    } else if (humanSelection==="paper" && computerSelection==="rock") {
        console.log("You Win! Paper beats Rock");
        roundResult.textContent=`You Win! Paper beats Rock`;
        humanScore++;
        round++;
    } else if (humanSelection==="paper" && computerSelection==="scissors") {
        console.log("You Lose! Scissors beats paper");
        roundResult.textContent=`You Lose! Scissors beats paper`;
        computerScore++;
        round++;
    } else if (humanSelection==="scissors" && computerSelection==="rock") {
        console.log("You Lose! Rock beats Scissors");
        roundResult.textContent=`You Lose! Rock beats Scissors`;
        computerScore++;
        round++;
    } else if (humanSelection==="scissors" && computerSelection==="paper") {
        console.log("You Win! Scissors beats Paper");
        roundResult.textContent=`You Win! Scissors beats Paper`;
        humanScore++;
        round++;
    }

    displayScoresAndRound();

    if (round === 5) {
        if (humanScore === computerScore) {
            console.log(`Tie!\nYour score:${humanScore}\nThe computer's score:${computerScore}`);
            gameResultDisplay.textContent = `Tie! Your score:${humanScore} The computer's score:${computerScore}`;
        } else if (humanScore > computerScore) {
            console.log(`You Won!\nYour score:${humanScore}\nThe computer's score:${computerScore}`);
            gameResultDisplay.textContent = `You Won! Your score:${humanScore} The computer's score:${computerScore}`;
        } else if (humanScore < computerScore) {
            console.log(`You Lost!\nYour score:${humanScore}\nThe computer's score:${computerScore}`);
            gameResultDisplay.textContent = `You Lost! Your score:${humanScore} The computer's score:${computerScore}`;
        }
        round = 0;
        computerScore = 0;
        humanScore = 0;
    }
}   