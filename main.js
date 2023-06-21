const choices = ['rock', 'paper', 'scissors'];// array containing the possible choices, it is contained into an array to asign an index number to every choice with which will generate the random number.
						
function getComputerChoice() {
let computerChoice = choices[randomNumber()]; //uses the index to acces the element selected randomly
return computerChoice;
}


function randomNumber() {
    return Math.floor(Math.random() * 3); // creates a random number between 0 and 2
  }
 
function oneRound(playerSelection, computerSelection) {
    

    if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
        console.log('It is a Draw');
    } else {
        console.log('test');
    }
}  

function playerSelection() {
    let playerSelection = prompt('Enter Selection');
    let playerSelectionInsensitive = playerSelection.toLowerCase();
    return playerSelectionInsensitive;
}

//oneRound(playerSelection(), getComputerChoice());