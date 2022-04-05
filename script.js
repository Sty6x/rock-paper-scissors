// Referencing nodes
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')
const buttons = document.querySelectorAll('button');




function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    let theChoice = choices[Math.floor(Math.random() * choices.length)]
    return theChoice;
}


function playRound(playerSelection, computerSelection) {
    let noPoints = false;
    let win;
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

}


// a function that changes the playerSelection to either rock paper or scissors


rock.addEventListener('click', () => {
    selection = 'rock'
    console.log(selection)
})
paper.addEventListener('click', () => {
    selection = 'paper'
    console.log(selection)
})
scissors.addEventListener('click', () => {
    selection = 'scissors'
    console.log(selection)
})

// console.log(playRound(selection, computerPlay()));