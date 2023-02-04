//Nodelist of all the buttons
const buttons = document.querySelectorAll('.choice');
var previousChoice = null;

//Setting up the event listeners
buttons.forEach(function(button){
    button.addEventListener('click', function(event) {
        //Getting the value of the button
        let choice = event.target.id;
        let computerSelection = getComputerMove();
        //Calling the playRound function
        playRound(choice, computerSelection);
    });
});

function getComputerMove(){
    //Randomly generate a number between 0 and 2 inclusive
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (computerSelection == playerSelection){
        //draw
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){
        //player wins
        } else{
            //computer wins
        }
    
}