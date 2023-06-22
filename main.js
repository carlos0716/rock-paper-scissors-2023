const choices = ['rock', 'paper', 'scissors'];// array containing the possible choices, it is contained into an array to asign an index number to every choice with which will generate the random number.
let playerScore = 0;
let computerScore = 0; 
function game(){
    let score = 0;
    
    oneRound('scissors', "rock");
    console.log(playerScore, computerScore);
    if (playerScore === 5) {
        console.log('Player Wins')
        playerScore = playerScore - playerScore;
        computerScore = computerScore - computerScore;
    } else if(computerScore === 5) {
        console.log('CPU Wins')
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
    } else if(player !== 'rock'){
        alert('Wrong choice, try again')
    } else if(player !== 'paper'){
        alert('Wrong choice, try again')
    } else if(player !== 'scissors'){
        alert('Wrong choice, try again')
    }
    //console.log(computerScore, playerScore);
}  




//oneRound(playerSelection(), getComputerChoice());

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