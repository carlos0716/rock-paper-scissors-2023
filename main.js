const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0; // the variables to keep the score are set into the global object so they can be accessed by the two functions.
let computerScore = 0; 






//rockBtn.addEventListener('click', oneRound);
// function game(){
//     oneRound(playerSelection(), getComputerChoice());
//     console.log(playerScore, computerScore);
//     if (playerScore === 5) {
//         console.log('Player Wins - Game Over')
//         playerScore = playerScore - playerScore;
//         computerScore = computerScore - computerScore;
//     } else if(computerScore === 5) {
//         console.log('CPU Wins - Game Over')
//         playerScore = playerScore - playerScore;
//         computerScore = computerScore - computerScore;
//     }
// }
 



function getComputerChoice() {
    let computerChoice = choices[randomNumber()]; 
    return computerChoice;
}
    
function randomNumber() {
        return Math.floor(Math.random() * choices.length); 
}

const rock = document.getElementById('rock');
rock.addEventListener('click', (e) =>{
    oneRound(e.target.value, getComputerChoice());
} );

const paper = document.getElementById('paper');
paper.addEventListener('click', (e) =>{
    oneRound(e.target.value, getComputerChoice());
} );

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', (e) =>{
    oneRound(e.target.value, getComputerChoice());
} );

const result = document.getElementById('result');
const score = document.getElementById('score');



function oneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
         result.textContent = 'It\'s a draw';
    }
     else if (playerSelection === 'rock') {
     if (computerSelection === 'paper') {
         result.textContent = 'CPU wins';
         
         score.textContent = `CPU score: ${++computerScore} - Player score: ${playerScore}`;
     } else if (computerSelection === 'scissors') {
         result.textContent = 'Player wins';
         score.textContent = `CPU score: ${computerScore} - Player score: ${++playerScore}`;
         
     }
    } else if(playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            result.textContent = 'CPU wins';
            
            score.textContent = `CPU score: ${++computerScore} - Player score: ${playerScore}`;
        } else if (computerSelection === 'rock') {
            result.textContent = 'Player wins';
            score.textContent = `CPU score: ${computerScore} - Player score: ${++playerScore}`;
            
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            result.textContent = 'CPU wins';
            
            score.textContent = `CPU score: ${++computerScore} - Player score: ${playerScore}`;
        } else if (computerSelection === 'paper') {
            result.textContent = 'Player wins';
            score.textContent = `CPU score: ${computerScore} - Player score: ${++playerScore}`;
            
        }
    }
    
 } ;
// function playerSelection() {
//     let playerSelection = 
// }

// function playRock(e) {
//     let value = 'rock';
//     console.log(value);
// }
