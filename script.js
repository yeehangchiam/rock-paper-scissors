//this function use random methods to return as the computer selection
//first return the random number
//then compare the return number, if the random number is 0 then it is rock
//random number is 1 it is paper
//random number is 2 it is scissors
function computerPlay(computerSelection){
    let choiceNumber = Math.floor(Math.random()*3);

    if(choiceNumber == 0){
        computerSelection = "rock";
    }else if(choiceNumber == 1){
        computerSelection = "paper";
    }else{
        computerSelection = "scissors";
    }

    return(computerSelection);
}

//play one round of the game, compare each scenario between the player and the computer to know we win the match
//use if else statement to implement
function playRound(playerSelection,computerSelection)
{
   if(playerSelection === computerSelection)
   {
       console.log(playerSelection,computerSelection);
        return("It's a tie!");
   }
   else if(playerSelection=== "rock" && computerSelection === "scissors")
   {
    console.log(playerSelection,computerSelection);
        return("You Win! rock beats scissors");
   }
   else if(playerSelection === "paper" && computerSelection === "rock")
   {
    console.log(playerSelection,computerSelection);
    return("You Win! paper beats rock");
   }
   else if(playerSelection === "scissors" && computerSelection === "paper")
   {
    console.log(playerSelection,computerSelection);
    return("You Win! scissors beat paper");
   }
   else if(playerSelection === "rock" && computerSelection === "paper")
   {
    console.log(playerSelection,computerSelection);
    return("You Lose! Computer's "+ computerSelection + " beat "+playerSelection);
    }
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        console.log(playerSelection,computerSelection);
        return("You Lose! Computer's "+ computerSelection + " beat "+playerSelection);
    }
    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        console.log(playerSelection,computerSelection);
        return("You Lose! Computer's "+ computerSelection + " beat "+playerSelection);
    }
}

function game(){
      let computerSelection= computerPlay();
    let playerSelection = window.prompt("Enter your choice (rock, paper, scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

     playerSelection = window.prompt("Enter your choice (rock, paper, scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

     playerSelection = window.prompt("Enter your choice (rock, paper, scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

     playerSelection = window.prompt("Enter your choice (rock, paper, scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 

     playerSelection = window.prompt("Enter your choice (rock, paper, scissors): ");
    console.log(playRound(playerSelection,computerSelection)); 
    
}
console.log(game());

//  const playerSelection = "rock";
//   const computerSelection = computerPlay();
//  console.log(playRound(playerSelection,computerSelection));
