function computerPlay(computerSelection){
    let choiceNumber = Math.floor(Math.random()*3);

    if(choiceNumber == 0){
        computerSelection = "Rock";
    }else if(choiceNumber == 1){
        computerSelection = "Paper";
    }else{
        computerSelection = "Scissors";
    }

    return(computerSelection);
}


function playRound(playerSelection,computerSelection)
{
   if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return("It's a tie!");
   }
   else if(
    (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") || 
   (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") ||
   (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") ){
       return("You lose!");
   }
   else{
       return("You win!");
   }
}

function game(){
    let playerSelection = prompt("Rock, Paper or Scissors?");
}
game();

// const playerSelection = "Rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection,computerSelection));
