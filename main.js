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
    oneRound('rock', getComputerChoice());
} );

const paper = document.getElementById('paper');
paper.addEventListener('click', (e) =>{
    oneRound('paper', getComputerChoice());
} );

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', (e) =>{
    oneRound('scissors', getComputerChoice());
} );


function oneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
         console.log('Draw');
    }
     else if (playerSelection === 'rock') {
     if (computerSelection === 'paper') {
         console.log('cpu wins');
         computerScore++;
     } else if (computerSelection === 'scissors') {
         console.log('cpu lose');
         playerScore++;
     }
    } else if(playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log('cpu wins');
            computerScore++;
        } else if (computerSelection === 'rock') {
            console.log('cpu lose');
            playerScore++;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log('cpu wins');
            computerScore++;
        } else if (computerSelection === 'paper') {
            console.log('cpu lose');
            playerScore++;
        }
    }
    return playerScore;
 } ;
// function playerSelection() {
//     let playerSelection = 
// }

// function playRock(e) {
//     let value = 'rock';
//     console.log(value);
// }
