function getComputerChoice () {
    let num = Math.random();
    
    if (num < 1/3) {
        return "Rock";
    } else if (num >= 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice () {
    return prompt("Enter your choice:");
}

console.log(getHumanChoice());