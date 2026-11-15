function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++) {
        playRound(getComputerChoice(),getHumanChoice());
    }

    function playRound (computerSelection ,humanSelection) {
        if (computerSelection === humanSelection) {
            console.log("Draw!");
            humanScore++;
            computerScore++;
        } else if (humanSelection==="rock" && computerSelection==="paper") {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        } else if (humanSelection==="rock" && computerSelection==="scissors") {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        } else if (humanSelection==="paper" && computerSelection==="rock") {
            console.log("You Win! Paper beats Rock");
            humanScore++;
        } else if (humanSelection==="paper" && computerSelection==="scissors") {
            console.log("You Lose! Scissors beats paper");
            computerScore++;
        } else if (humanSelection==="scissors" && computerSelection==="rock") {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        } else if (humanSelection==="scissors" && computerSelection==="paper") {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        }
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

function getHumanChoice () {
    return prompt("Enter your choice:").toLowerCase();
}

