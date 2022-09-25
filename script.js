//GAME STRUCTURE
let playerScore = 0
let computerScore = 0
let roundWinner = ''  

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
      ) {
        playerScore++
        roundWinner = 'player'
      }
      if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
      ) {
        computerScore++
        roundWinner = 'computer'
      }
    
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'Rock'
      case 1:
        return 'Paper'
      case 2:
        return 'Scissors'
    }
  }
  
function isGameOver() {
    return playerScore === 5 || computerScore ===5
}


//UI

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const playerPrint = document.getElementById('playerPrint')
const computerPrint = document.getElementById('computerPrint')
const outcome = document.getElementById('outcome')
const playerScoreboard = document.getElementById('playerScoreboard')
const computerScoreboard = document.getElementById('computerScoreboard')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

//Starting Parameters
outcome.textContent = 'First to score 5 points wins the game'
playerScoreboard.textContent = 'Player: 0'
computerScoreboard.textContent = 'Computer: 0'
//


rock.addEventListener("click", () => handleClick('Rock'))
paper.addEventListener("click", () => handleClick('Paper'))
scissors.addEventListener("click", () => handleClick('Scissors'))
restartBtn.addEventListener("click", restartGame)
overlay.addEventListener('click', closeEndgameModal)


function handleClick(playerSelection) {
    if (isGameOver()) {
        openEndgameModal()
        return
    }

    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    makeChoices(playerSelection,computerSelection)
    updateScore()

    if (isGameOver()) {
        openEndgameModal()
        setFinalMessage()
    }
}

function makeChoices (playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'Rock' :
          playerPrint.textContent = "Rock"
          break
      case 'Paper' :
          playerPrint.textContent = "Paper"
          break
      case 'Scissors' :
          playerPrint.textContent = "Scissors"
          break
    } 

    switch (computerSelection) {
        case 'Rock':
            computerPrint.textContent = "Rock"
            break
        case 'Paper':
            computerPrint.textContent = "Paper"
            break
        case 'Scissors':
            computerPrint.textContent = "Scissors"
            break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
      outcome.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      outcome.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      outcome.textContent = 'You lost!'
    }
  
    playerScoreboard.textContent = `Player: ${playerScore}`
    computerScoreboard.textContent = `Computer: ${computerScore}`
  }

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }
  

function restartGame() {
playerScore = 0
computerScore = 0
outcome.textContent = 'First to score 5 points wins the game'
playerPrint.textContent = ""
computerPrint.textContent = ''
playerScoreboard.textContent ='Player: 0'
computerScoreboard.textContent = 'Computer: 0'
endgameModal.classList.remove('active')
overlay.classList.remove('active')
}




