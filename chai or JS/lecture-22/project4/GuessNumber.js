let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submitGuess");
const guessInput = document.querySelector("#guess");
const guessList = document.querySelector("#prevGuess");
const remGuess = document.querySelector("#remGuessCount");
const guessMessage = document.querySelector("#guessMessage");

let canPlay = true;
let guessCount = 0;

if (canPlay) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guessValue = parseInt(guessInput.value);
    guessValidate(guessValue);
    guessInput.value = "";
  });
}

const guessValidate = (guess) => {
  // validate the guess input
  if (isNaN(guess)) {
    const message = "Enter a valid number";
    displayMessage(message);
  } else if (guess < 1) {
    const message = "Enter a number greater than 1";
    displayMessage(message);
  } else if (guess > 100) {
    const message = "Enter a number less than or equal to 100";
    displayMessage(message);
  } else if (guessCount === 10) {
    const message = `Game Over!! Random number was ${randomNumber}`;
    displayMessage(message);
    endGame();
  } else {
    checkGuess(guess);
  }
};

const checkGuess = (guess) => {
  // check the guess
  if (guess === randomNumber) {
    const message = "Congratulations! You guessed the number correct";
    displayMessage(message);
    endGame();
  } else if (guess < randomNumber) {
    const message = "Guessed number is too low!!!";
    displayMessage(message);
  } else {
    const message = "Guessed number is too high!!!";
    displayMessage(message);
  }
  showPrevGuess(guess);
};

const displayMessage = (message) => {
  // display message
  guessMessage.innerHTML = message;
};

const showPrevGuess = (guess) => {
  guessList.innerHTML += `${guess}, `;
  guessCount += 1;
  remGuess.innerHTML = `${10 - guessCount}`;
};

const newGameBtn = document.querySelector("#newGame");
const endGame = () => {
  guessInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  canPlay = false;
  const html = `<button style="border-radius: 4px; padding: 7px; cursor: pointer">Start New Game </button>`;
  newGameBtn.innerHTML = html;
  newGameBtn.addEventListener("click", (e) => {
    startNewGame();
  });
};

const startNewGame = () => {
  guessCount = 0;
  remGuess.innerHTML = 10;
  guessInput.removeAttribute("disabled");
  submit.removeAttribute("disabled");
  const message = "";
  displayMessage(message);
  guessList.innerHTML = "Previous Guesses: ";
  newGameBtn.innerHTML = "";
  canPlay = true;
};
