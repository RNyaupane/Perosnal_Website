
const buttons = document.querySelectorAll('button');
const computer = document.querySelector('.computer .card-body');
const result = document.querySelector('.result .card-body');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = button.className;
    const gameResult = playRound(playerSelection, computerSelection);
    result.textContent = gameResult;
  });
});

function computerPlay() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 'You win! Rock beats scissors.';
    } else {
      return 'You lose! Paper beats rock.';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You win! Paper beats rock.';
    } else {
      return 'You lose! Scissors beat paper.';
    }
  }
}