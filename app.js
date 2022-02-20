function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    cpuIndex = Math.floor(Math.random() * options.length);
    return options[cpuIndex];
}

const cpuChoice = computerPlay();
console.log(cpuChoice);

