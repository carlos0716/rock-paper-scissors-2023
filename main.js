const choices = ['rock', 'paper', 'scissors'];// array containing the possible choices, it is contained into an array to asign an index number to every choice with which will generate the random number.
						

 
function oneRound(playerSelection, computerSelection) {
const playerWinsMessage = `Player - ${playerSelection} vs CPU - ${computerSelection} - Player wins!`;
const cpuWinsMessage = `CPU - ${computerSelection} vs  Player -${playerSelection} - CPU wins!`;
let playerScore = 0;
let computerScore = 0;    
if (playerSelection === '') {
    alert('Try again');
    } else if (playerSelection === computerSelection)  {
        console.log(`Player - ${playerSelection} vs CPU ${computerSelection} - It is a Draw`);
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
    }
    console.log(computerScore, playerScore);
}  

function getComputerChoice() {
    let computerChoice = choices[randomNumber()]; //uses the index to acces the element selected randomly
    return computerChoice;
    }
    
    
    function randomNumber() {
        return Math.floor(Math.random() * 3); // creates a random number between 0 and 2
      }

function playerSelection() {
    let playerSelection = prompt('Enter Selection');
    let playerSelectionInsensitive = playerSelection.toLowerCase();
    return playerSelectionInsensitive;
}



//oneRound(playerSelection(), getComputerChoice());