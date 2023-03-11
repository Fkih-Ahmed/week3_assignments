// function that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // make playerSelection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // determine winner based on player and computer selections
  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// function that plays a 5 round game of Rock Paper Scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose Rock, Paper, or Scissors');
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.startsWith('You Win!')) {
      playerScore++;
    } else if (result.startsWith('You Lose!')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore}-${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game! Final score: ${playerScore}-${computerScore}`);
  } else {
    console.log(`It's a tie game! Final score: ${playerScore}-${computerScore}`);
  }
}

// start the game
game();
