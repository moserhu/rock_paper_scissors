let getCompChoice = parseInt(Math.random() * 3);
let playerSelection = 0;
const playerInput = prompt("Enter Here");

const computerSelection = getCompChoice;

function makeInt() {
str = playerInput.toUpperCase;  

    if (str == "ROCK") {
        playerSelection = 0;
    }
    else if (str == "PAPER") {
        playerSelection = 1;
    } 
    else if (str == "SCISSORS") {
         playerSelection = 2;
    }
    else {
        console.log("Error");
    }
}

function playRound() {
    x = playerSelection;
    y = computerSelection;
 
    if ((x == 0 && y == 2) || (x == 1 && y == 0) || (x == 2 && y == 1)) {
        console.log("Player wins");
    }

    else if ((x == 2 && y == 0) || (x == 0 && y == 1) || (x == 1 && y == 2)) {
        console.log("Computer wins");
    }
    else if ((x == 0 && y == 0) || (x == 1 && y == 1) || (x == 2 && y == 2)) {
        console.log("Tie!")
    }
    else {
        console.log("FAILURE");
    }
}
console.log(playRound(playerSelection,computerSelection))

////trying to figure out how to get the playerselction 
/// variable to change and not accept invalid answers