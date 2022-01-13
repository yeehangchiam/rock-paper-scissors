//this function use random methods to return as the computer selection
//first return the random number
//then compare the return number, if the random number is 0 then it is rock
//random number is 1 it is paper
//random number is 2 it is scissors
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

//play one round of the game, compare each scenario between the player and the computer to know we win the match
//use if else statement to implement
function playRound(playerSelection,computerSelection)
{
   if(playerSelection.toUpperCase() === computerSelection.toUpperCase())
   {
       console.log(playerSelection,computerSelection);
        return("It's a tie!");
   }
   else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS")
   {
    console.log(playerSelection,computerSelection);
        return("You Win! Rock beats Scissors");
   }
   else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")
   {
    console.log(playerSelection,computerSelection);
    return("You Win! Paper beats Rock");
   }
   else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")
   {
    console.log(playerSelection,computerSelection);
    return("You Win! Scissors beat Paper");
   }
   else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER")
   {
    console.log(playerSelection,computerSelection);
    return("You Lose! Computer's "+ computerSelection + " beat "+playerSelection);
    }
    else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS")
    {
        console.log(playerSelection,computerSelection);
        return("You Lose! Computer's "+ computerSelection + " beat "+playerSelection);
    }
    else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK")
    {
        console.log(playerSelection,computerSelection);
        return("You Lose! Computer's "+ computerSelection + " beat "+playerSelection);
    }
}

function game(){
    const playerSelection = window.prompt("Enter your choice (Rock, Paper, Scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

    const playerSelection = window.prompt("Enter your choice (Rock, Paper, Scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

    const playerSelection = window.prompt("Enter your choice (Rock, Paper, Scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

    const playerSelection = window.prompt("Enter your choice (Rock, Paper, Scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

    const playerSelection = window.prompt("Enter your choice (Rock, Paper, Scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 
    
}

//  const playerSelection = "Rock";
//  const computerSelection = computerPlay();
//  console.log(playRound(playerSelection.toUpperCase(),computerSelection.toUpperCase()));
