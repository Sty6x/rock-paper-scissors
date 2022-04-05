// Referencing nodes
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')


function reveal(){
    console.log('rock')
}

rock.addEventListener('click', reveal);




function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    let theChoice = choices[Math.floor(Math.random() * choices.length)]
    return theChoice;
}



function playRound(playerSelection, computerSelection) {
    let noPoints = false;
    let win;
    // let playerPoints;
    // let computerPoints;
    if (playerSelection == computerSelection) {
        noPoints = true;
    } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
        win = true;
    } else if (playerSelection == 'rock' & computerSelection == 'paper') {
        win = false;
    } else if (playerSelection == 'paper' & computerSelection == 'rock') {
        win = true;
    } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
        win = false;
    } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
        win = false;
    } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
        win = true;
    }
    if (playerSelection == computerSelection) {
        return null
    } else {
        return win;
    }

}

// function game() {
//     let score = 0;
//     let cpuScore = 0;
//     let announce;
//     let playOrNay = confirm("Play or Cancel?");
//     let playerSelection;
//     if (playOrNay || playerSelection) {
//         for (let i = 0; i < 5; i++) {
//             playerSelection = prompt("Please Enter Your Choice", "Rock, Paper Or Scissors").toLowerCase(); // takes user input
//             const computerSelection = computerPlay(); // Computer Selection
//             playRound(playerSelection, computerSelection) ? score++ : cpuScore++; // increments player and computer scores
//             announce = alert(`Player Chose: ${playerSelection}\nComputer Chose: ${computerSelection}`);
//             if (playerSelection == computerSelection ) {
//                 score = score; 
//                 cpuScore = cpuScore;
//                 announce = alert(`It's a Tie!`);
//             }
//         };
//         score > cpuScore ? announce = `Player Score: ${score}\nComputer Score: ${cpuScore}\nYou Won!` :
//             announce = `Player Score: ${score}\nComputer Score: ${cpuScore}\nComputer Won!`
//     } else {
//         announce = `Player Score: ${score}\nComputer Score: ${cpuScore}`;
//         announce = "You Quit";
//     }
//     alert(announce);
// }

// game();