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


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = '';
        switch (e.target.id) {
            case 'rock':
                playerSelection = 'rock';
                break;
            case 'paper':
                playerSelection = 'paper'
                break;
            case 'scissors':
                playerSelection = 'scissors'
                break;
        }

        console.log(playerSelection);

    })
})

// console.log(computerPlay());

// a function that changes the playerSelection to either rock paper or scissors



// test area
// buttons.forEach((button) => {
//     button.addEventListener('click',buttonClick)
// })

// function buttonClick(e){
//     console.log(typeof e.target.id);
// }