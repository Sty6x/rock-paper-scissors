

function computerPlay(){
    let choices = ['rock', 'paper', 'scissors']
    let theChoice = choices[Math.floor(Math.random() * choices.length)]
    return theChoice;
}


function gameLoop(playerSelection,computerSelection){
    let announce;
    let noPoints = false;
    let win;
    // let playerPoints;
    // let computerPoints;
    if (playerSelection == computerSelection){
        announce = `It's a tie!\nYou chose: ${playerSelection} \nComputer Chose: ${computerSelection}`;
        noPoints = true;
    }
    else if (playerSelection == 'rock' & computerSelection == 'scissors'){
        // announce = `You Won!\nYou chose: ${playerSelection} \nComputer Chose: ${computerSelection}`;
        win = true;
    }
    else if (playerSelection == 'rock' & computerSelection == 'paper'){
        // announce = `Computer wins!\nYou chose: ${playerSelection} \nComputer Chose: ${computerSelection}`;
        win = false;
    }
    else if (playerSelection == 'paper' & computerSelection == 'rock'){
        // announce = `You Won!\nYou chose: ${playerSelection} \nComputer Chose: ${computerSelection}`;
        win = true;
    }
    else if (playerSelection == 'paper' & computerSelection == 'scissors'){
        // announce = `Computer wins!\nYou chose: ${playerSelection} \nComputer Chose: ${computerSelection}`;
        win = false;
    }
    else if (playerSelection == 'scissors' & computerSelection == 'rock'){
        // announce = `Computer wins!\nYou chose: ${playerSelection} \nComputer Chose: ${computerSelection}`;
        win = false;
    }
    else if (playerSelection == 'scissors' & computerSelection == 'paper'){
        // announce = `You won!\nYou chose: ${playerSelection} \nComputer Chose: ${computerSelection}`;
        win = true;
    }

    return win;
}


function game(){
    let score = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Please Enter Your Choice", "Rock, Paper Or Scissors").toLowerCase();
        gameLoop(playerSelection.toLowerCase(),computerSelection)? score++ : cpuScore++;
    };

    console.log(score, cpuScore);

}
const computerSelection = computerPlay();
console.log(game());





// console.log(gameLoop(playerSelection.toLowerCase(),computerSelection));