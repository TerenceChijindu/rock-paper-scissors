function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
           return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}


function singleGameRound(playerSelection, computerSelection) {

    
    //Conditions for a tie
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "Alas! It is a tie";
    } 
        //Conditions for a loss
        else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
       return "You lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beats Paper";
    } 
    
        //Conditions for a win
        else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beats Paper";
    } 

        //Fallback in case of spelling error or wrong choice
        else {
            return "Wrong choice! Check your spelling";
        }
        
}

function game() {

    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt("Please put in your choice")
        const computerSelection = getComputerChoice();
        console.log( singleGameRound(playerSelection, computerSelection) );
    
    }
}