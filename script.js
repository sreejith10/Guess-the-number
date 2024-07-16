const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
let guesses = 0;

const guessButton = document.getElementById('guessButton');
const userGuessInput = document.getElementById('userGuess');
const messageElement = document.getElementById('message');

guessButton.addEventListener('click', function() {
  const userGuess = Number(userGuessInput.value);
  guesses++;

  if (userGuess === randomNumber) {
    messageElement.textContent = 'Congratulations! You guessed the number in ${guesses} guesses!';
    guessButton.disabled = true; // Disable button after win
  } else if (userGuess > randomNumber) {
    messageElement.textContent = 'Your guess is too high!';
  } else {
    messageElement.textContent = 'Your guess is too low!';
  }

  userGuessInput.value = ''; // Clear input field after guess
});