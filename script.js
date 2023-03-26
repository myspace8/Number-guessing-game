let randomNumber = Math.floor(Math.random() * 100) + 1;
const resetGameButton = document.getElementById('reset-game');
const guesses = document.getElementById('guesses');
const lastResult = document.getElementById('result');
const hint = document.getElementById('hint');
const guessSubmit = document.getElementById('guess-submit');
const guessField = document.getElementById('guess-field');
let turn = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (turn === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = `Congratulations! You guessed the number in ${turn} turns.`;
    lastResult.style.backgroundColor = 'green';
    hint.textContent = '';
    setGameOver();
  } else if (turn === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    hint.textContent = '';
    setGameOver();
  } else {
    const direction = userGuess > randomNumber ? 'lower' : 'higher';
    const turnsLeft = 10 - turn;
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      hint.textContent = `Hint: Guess ${direction}! You have ${turnsLeft} turn(s) left`;
    } else if (userGuess > randomNumber) {
      hint.textContent = `Hint: Guess ${direction}! You have ${turnsLeft} turn(s) left`;
    }
  }

  turn++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetGameButton.style.visibility = 'visible';
  resetGameButton.addEventListener('click', resetGame);
}

function resetGame() {
  console.log('ddd');
  turn = 1;
  const resetParas = document.querySelectorAll('#result-paras p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  resetGameButton.style.visibility = 'hidden';
}
