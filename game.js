const buttons = document.getElementById('moveChoices');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');

let previousChoice = null;
let playerScore = 0;
let computerScore = 0;

//Use JS bubbling to listen for a click on any button in movrChoices div.
moveChoices.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        let choice = event.target.id;
        let computerSelection = getComputerMove();
        playRound(choice, computerSelection);
    }
});

function getComputerMove(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function determineRoundWinner(playerSelection, computerSelection){
    if (computerSelection == playerSelection){
        //draw
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){
        //player wins
        playerScore++;
        playerScoreText.textContent = playerScore;
        } else{
        //computer wins
        computerScore++;
        computerScoreText.textContent = computerScore;
        }
}

function resetGame(){
    prompt(announceWinner())
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function announceWinner(){
    if (playerScore > computerScore){
        alert("You win!");
    } else{
        alert("You lose!");
}
}

function playRound(playerSelection, computerSelection){
    determineRoundWinner(playerSelection, computerSelection);
    if (playerScore >= 5 || computerScore >= 5){
        resetGame();
    }
    
}