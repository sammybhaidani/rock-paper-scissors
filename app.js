// Returns the computer option
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    cpuIndex = Math.floor(Math.random() * options.length);
    return options[cpuIndex];
}

// Returns the player's option
function playerChoice() {
    const playerSelection = prompt('Enter a choice: Rock, Paper or Scissors');
    // TODO: check that input is in the correct format, i.e no numbers or strings other
    // than rps
    return playerSelection;
}


// Determines the winner of a round of rps
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

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
        roundWinner = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerWin) {
        roundWinner = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (draw) {
        roundWinner = `TIE! ${playerSelection} vs ${computerSelection}`;
    }

    return roundWinner;
}

function game () {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        computerSelection = computerPlay();
        playerSelection = playerChoice();

        let roundWinner = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${roundWinner}`);

        if (roundWinner == `You Win! ${playerSelection} beats ${computerSelection}`) {
            playerScore++
        } else if (roundWinner == `You Lose! ${computerSelection} beats ${playerSelection}`) {
            computerScore++;
        } 
    }

    if (playerScore > computerScore) {
        console.log(`You Win! Score: [Player: ${playerScore}] vs [Computer: ${computerScore}]`);
    } else if (computerScore > playerScore) {
        console.log(`You Lose! Score: [Player: ${playerScore}] vs [Computer: ${computerScore}]`);
    } else {
        console.log(`TIE! [Player: ${playerScore}] vs [Computer: ${computerScore}]`);
    }
}

game();

