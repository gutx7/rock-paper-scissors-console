
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

console.log(getHumanChoice());

function playRound (computerSelection ,humanSelection) {
    return;
}