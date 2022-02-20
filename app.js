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

const cpuChoice = computerPlay();
const playerSelection = playerChoice();

// Determines the winner of a round of rps
function playRound(playerSelection, cpuChoice) {

    playerSelection = playerSelection.toLowerCase();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${cpuChoice}`);

    let playerWin = false;
    let computerWin = false;
    let draw = false;

    if (playerSelection == 'rock' && cpuChoice == 'scissors') {
        playerWin = true;
    } else if (playerSelection == 'rock' && cpuChoice == 'paper') {
        computerWin = true;
    } else if (playerSelection == 'paper' && cpuChoice == 'rock') {
        playerWin = true;
    } else if (playerSelection == 'paper' && cpuChoice == 'scissors') {
        computerWin = true;
    } else if (playerSelection == 'scissors' && cpuChoice == 'paper') {
        playerWin = true;
    } else if (playerSelection == 'scissors' && cpuChoice == 'rock') {
        computerWin = true;
    } else {
        draw = true;
    }

    if (playerWin) {
        console.log(`You Win! ${playerSelection} beats ${cpuChoice}`);
    } else if (computerWin) {
        console.log(`You Lose! ${cpuChoice} beats ${playerSelection}`);
    } else if (draw) {
        console.log(`TIE! ${playerSelection} vs ${cpuChoice}`);
    }
}

playRound(playerSelection, cpuChoice);
