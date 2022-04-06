// Referencing nodes
const buttons = document.querySelectorAll('button');
const buttonContainer = document.querySelector('.buttons');
const showPlayerScore = document.createElement('div');
const showEnemyScore = document.createElement('div');
const tieScore = document.createElement('div');
const body = document.querySelector('body')
body.appendChild(showPlayerScore);
body.appendChild(showEnemyScore)
body.appendChild(tieScore);


// declaring variables
let playerScore = 0;
let computerScore = 0;

// Add the fuction gameplay on for each loop on addeventlistener


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    // player
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        body.removeChild(tieScore);
        showPlayerScore.textContent = `player Score: ${playerScore}`;
        if (playerScore == 5){
            body.innerHTML = '<span> Player Wins: 5 </span>'
        }
        
    } else if (playerSelection == computerSelection) {
        body.appendChild(tieScore);
        tieScore.textContent = `It's a tie!`
    }
    // computer
    else {
        computerScore += 1
        showEnemyScore.textContent = `cpu Score: ${computerScore}`;
        if(computerScore == 5){
            body.innerHTML = '<span> Enemy Wins: 5 </span>'
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, computerPlay())
        
    })
});