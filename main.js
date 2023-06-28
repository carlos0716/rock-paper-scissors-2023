const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0; // the variables to keep the score are set into the global object so they can be accessed by the two functions.
let computerScore = 0; 

function game(){
    oneRound(playerSelection(), getComputerChoice());
    console.log(playerScore, computerScore);
    if (playerScore === 5) {
        console.log('Player Wins - Game Over')
        playerScore = playerScore - playerScore;
        computerScore = computerScore - computerScore;
    } else if(computerScore === 5) {
        console.log('CPU Wins - Game Over')
        playerScore = playerScore - playerScore;
        computerScore = computerScore - computerScore;
    }
}
 
function oneRound(playerSelection, computerSelection) {
const playerWinsMessage = `${playerSelection} beats ${computerSelection} - Player wins!`;
const cpuWinsMessage = `${computerSelection} beats ${playerSelection} - CPU wins!`;

   if (playerSelection === '') {
    alert('Try again');
    } else if (playerSelection === computerSelection)  {
        console.log(`It is a Draw`);
    } else if(playerSelection === 'rock') {
            if(computerSelection === 'scissors'){
                console.log(playerWinsMessage);
                playerScore++;
            } else {
                console.log(cpuWinsMessage);
                computerScore++;
            }
    } else if(playerSelection === 'paper') {
            if(computerSelection === 'rock') {
                console.log(playerWinsMessage);
                playerScore++;
            } else {
                console.log(cpuWinsMessage);
                computerScore++;
            }
    } else if(playerSelection === 'scissors') {
        if(computerSelection === 'paper') {
            console.log(playerWinsMessage);
            playerScore++;
        } else {
            console.log(cpuWinsMessage);
            computerScore++;
        }
    } else if(playerSelection !== 'rock'){
        alert('Wrong choice, try again')
    } else if(playerSelection !== 'paper'){
        alert('Wrong choice, try again')
    } else if(playerSelection !== 'scissors'){
        alert('Wrong choice, try again')
    }
}  

function getComputerChoice() {
    let computerChoice = choices[randomNumber()]; 
    return computerChoice;
}
    
function randomNumber() {
        return Math.floor(Math.random() * getComputerChoice.length); 
}

function playerSelection() {
    let playerSelection = prompt('Enter Selection');
    let playerSelectionInsensitive = playerSelection.toLowerCase();
    return playerSelectionInsensitive;
}
