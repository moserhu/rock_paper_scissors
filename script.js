const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const buttons = document.querySelectorAll("button")
let getCompChoice = parseInt(Math.random() * 3);
const computerSelection = getCompChoice;

function compChoice() {
choice = getCompChoice;
    
    if (choice == 0) {
        document.getElementById('computerPrint').innerHTML =("Rock")
    }
    else if (choice == 1) {
       document.getElementById('computerPrint').innerHTML =("Paper")
    }
    else if (choice == 2) {
       document.getElementById('computerPrint').innerHTML =("Scissors")
    }
}

rock.addEventListener("click", e => {
    document.getElementById('playerPrint').innerHTML =("Rock")
})

paper.addEventListener("click", e => {
    document.getElementById('playerPrint').innerHTML =("Paper")
})

scissors.addEventListener("click", e => {
    document.getElementById('playerPrint').innerHTML =("Scissors")
})


buttons.forEach(button => {
    button.addEventListener("click", compChoice)
})



//document.addEventListener('click', compChoice)




/* 
let playerSelection = 0;
//const playerInput = prompt("Enter Here");



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
/// variable to change and not accept invalid answers */