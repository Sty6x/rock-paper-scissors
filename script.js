// Referencing nodes
// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors')
const buttons = document.querySelectorAll('button');



// Add the fuction gameplay on for each loop on addeventlistener


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    // let theChoice = choices[Math.floor(Math.random() * choices.length)]
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    

    

    // if (playerSelection == computerSelection){
    //     console.log(`its a tie: \nplayer: ${playerSelection} \ncomputer: ${computerSelection}`)
    // }

    console.log(playerSelection, computerSelection);
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, computerPlay())
    })
});


