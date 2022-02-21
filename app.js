// Returns the computer option
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    index = Math.floor(Math.random() * options.length);
    return options[index];
}

// Returns the player's option
function playerChoice() {

    let playerSelection = prompt('Enter a choice: Rock, Paper or Scissors');
    playerSelection = playerSelection.toLowerCase();

    let valid = false;
    while (!valid) {
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt('Enter a choice: Rock, Paper or Scissors');
        } else {
            valid = true;
        }
    }

    return playerSelection;
}

// Determines the winner of a round of rps
function playRound(playerSelection, computerSelection) {

    console.log(`You: [${playerSelection}] vs Computer: [${computerSelection}]`);

    let playerWin = false;
    let computerWin = false;
    let draw = false;

    let roundWinner = '';
    
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerWin = true;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerWin = true;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerWin = true;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWin = true;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerWin = true;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerWin = true;
    } else {
        draw = true;
    }

    if (playerWin) {
        roundWinner = 'Player';
    } else if (computerWin) {
        roundWinner = 'Computer';
    } else if (draw) {
        roundWinner = 'TIE!';
    }

    return roundWinner;
}

function game () {

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    while (playerScore != 5 && computerScore!= 5) {

        computerSelection = computerPlay();
        playerSelection = playerChoice();

        let roundWinner = playRound(playerSelection, computerSelection);
        
        if (roundWinner == 'Player') {

            console.log(`Round ${round + 1}: You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++
            
        } else if (roundWinner == 'Computer') {

            console.log(`Round ${round + 1}: ${roundWinner} wins! ${computerSelection} beats ${playerSelection}`);
            computerScore++;   

        }
        else {
            console.log(`Round ${round + 1}: ${roundWinner}`);
        }
        console.log(`Current Score: [You: ${playerScore}] vs [Computer: ${computerScore}]`);
        round++;
    }
        
    if (playerScore == 5) {
        console.log(`You Win! Final score: [You: ${playerScore}] vs [Computer: ${computerScore}]`);
    } else if (computerScore == 5){
        console.log(`You Lose! Final score: [You: ${playerScore}] vs [Computer: ${computerScore}]`);
    } 
}

game();

