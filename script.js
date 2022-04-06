// Referencing nodes
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')
const buttons = document.querySelectorAll('button');



// Add the fuction gameplay on for each loop on addeventlistener


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    let theChoice = choices[Math.floor(Math.random() * choices.length)]
    return theChoice;
}


// function playRound(playerSelection, computerSelection) {
//     let noPoints = false;
//     let win;
//     if (playerSelection == computerSelection) {
//         noPoints = true;
//     } else if (playerSelection == 'rock' & computerSelection == 'scissors') {
//         win = true;
//     } else if (playerSelection == 'rock' & computerSelection == 'paper') {
//         win = false;
//     } else if (playerSelection == 'paper' & computerSelection == 'rock') {
//         win = true;
//     } else if (playerSelection == 'paper' & computerSelection == 'scissors') {
//         win = false;
//     } else if (playerSelection == 'scissors' & computerSelection == 'rock') {
//         win = false;
//     } else if (playerSelection == 'scissors' & computerSelection == 'paper') {
//         win = true;
//     }
//     return playerSelection
// }


buttons.forEach((playerSelection) => {
    playerSelection.addEventListener('click', (e) => {
        let win;
        let noPoints;
        if (e.target.id == computerPlay()) {
            noPoints = true;
        } else if (e.target.id == 'rock' & computerPlay() == 'scissors') {
            win = true;
        } else if (e.target.id == 'rock' & computerPlay() == 'paper') {
            win = false;
        } else if (e.target.id == 'paper' & computerPlay() == 'rock') {
            win = true;
        } else if (e.target.id == 'paper' & computerPlay() == 'scissors') {
            win = false;
        } else if (e.target.id == 'scissors' & computerPlay() == 'rock') {
            win = false;
        } else if (e.target.id == 'scissors' & computerPlay() == 'paper') {
            win = true;
        }
        console.log(e.target.id, computerPlay(), win, noPoints);
    })
})


// a function that changes the playerSelection to either rock paper or scissors



// test area
// buttons.forEach((button) => {
//     button.addEventListener('click',buttonClick)
// })

// function buttonClick(e){
//     console.log(typeof e.target.id);
// }

