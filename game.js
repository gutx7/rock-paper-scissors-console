const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score")

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    rock.addEventListener("click", () => {
        playRound(getComputerChoice(),"rock");
    })

    paper.addEventListener("click", () => {
        playRound(getComputerChoice(),"paper");
    })

    scissors.addEventListener("click", () => {
        playRound(getComputerChoice(),"scissors");
    })

    function playRound (computerSelection ,humanSelection) {
        if (computerSelection === humanSelection) {
            console.log("Draw!");
            roundResult.textContent="Draw!";
            humanScore++;
            computerScore++;
        } else if (humanSelection==="rock" && computerSelection==="paper") {
            console.log("You Lose! Paper beats Rock");
            roundResult.textContent="You Lose! Paper beats Rock";
            computerScore++;
        } else if (humanSelection==="rock" && computerSelection==="scissors") {
            console.log("You Win! Rock beats Scissors");
            roundResult.textContent="You Win! Rock beats Scissors";
            humanScore++;
        } else if (humanSelection==="paper" && computerSelection==="rock") {
            console.log("You Win! Paper beats Rock");
            roundResult.textContent="You Win! Paper beats Rock";
            humanScore++;
        } else if (humanSelection==="paper" && computerSelection==="scissors") {
            console.log("You Lose! Scissors beats paper");
            roundResult.textContent="You Lose! Scissors beats paper";
            computerScore++;
        } else if (humanSelection==="scissors" && computerSelection==="rock") {
            console.log("You Lose! Rock beats Scissors");
            roundResult.textContent="You Lose! Rock beats Scissors";
            computerScore++;
        } else if (humanSelection==="scissors" && computerSelection==="paper") {
            console.log("You Win! Scissors beats Paper");
            roundResult.textContent="You Win! Scissors beats Paper";
            humanScore++;
        }

        humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }

    if (humanScore === computerScore) {
        console.log(`Tie!\nYour score:${humanScore}\nThe computer's score:${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You Won!\nYour score:${humanScore}\nThe computer's score:${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You Lost!\nYour score:${humanScore}\nThe computer's score:${computerScore}`);
    }
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

//function getHumanChoice () {
  //  rock.addEventListener("click", () => {
    //    return "rock";
    //})

    //paper.addEventListener("click", () => {
      //  return "paper";
    //})

    //scissors.addEventListener("click", () => {
      //  return "scissors";
    //})
//}

