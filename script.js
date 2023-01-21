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



function getPlayerChoice(choice){
    const choices = ["rock","paper","scissors"];

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



function playRound(playerChoice,computerChoice){
    if (playerChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats Scissors");
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats Rock");
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beats Paper");
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissors");
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        console.log("You Lose! Paper beats Rock");
    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beats Paper");
    }
    else{
        console.log("Tie");
    }
}



function game(){

    for (let i = 0; i < 5; i++){
        let userChoice  = prompt("Please enter your choice (0,1,2): ");
        playRound(getPlayerChoice(userChoice),getComputerChoice());
    }
}

game();
