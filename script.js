const buttons = document.querySelectorAll('.btn');
let playerScore = 0;
let computerScore = 0;
let playerAnswer = "";

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "May the best person win!";

buttons.forEach((button) => {button.addEventListener('click',()=>{
    playerChoice = button.id;
    computerChoice = getComputerChoice();
    playGame();
})});


//to get computer selection
function getComputerChoice(){
    //create an array consists of 3 choices
    const choices = ["rock","paper","scissors"];

    //generate random number between 0 to 2
    const choice  = Math.floor(Math.random() * 3);
    console.log("computer choice is: "+choice);
    //return result according to the computer choice
    if (choice == 0){
        return choices[choice];
    }
    else if (choice == 1){
        return choices[choice];
    }
    else if (choice == 2){
        return choices[choice];
    }
}


function playRound(){
    if (playerChoice == "rock" && computerChoice == "scissors"){
        output.textContent = "You Win! Rock beats Scissors";
        playerScore++;
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        output.textContent = "You Win! Paper beats Rock";
        playerScore++;
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        output.textContent = "You Win! Scissors beats Paper";
        playerScore++;
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        output.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        output.textContent = "You Lose! Paper beats Rock";
        computerScore++;
    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        output.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
    }
    else{
        output.textContent = "Tie";
    }
}

function playGame(){
    output.textContent = "Choose Rock, Paper and Scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if(playerScore == 5){
        output.textContent = "You won the game! Congrats";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Player Score: ${computerScore}`;
    }
    else if (computerScore == 5){
        output.textContent = "You lost the game :/";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Player Score: ${computerScore}`;
    }
}
