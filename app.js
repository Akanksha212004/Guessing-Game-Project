// Step-1: Accessing the buttons

const startBtn = document.getElementById("btn");
const submitBtn = document.getElementById("submitBtn");
const quitBtn = document.getElementById("quitBtn");
const restart = document.getElementById("restartBtn");


// Step- 2: Adding the eventListeners to the buttons

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkGuess);
quitBtn.addEventListener("click", quitGame);
restart.addEventListener("click", resetGame);


// Step- 3: Declaring the variables

let randomNumber;
let maxNumber;


// Step- 4: Start the game i.e., defining startGame()

function startGame() {
  const input = document.getElementById("input");
  maxNumber = parseInt(input.value);

  if (isNaN(maxNumber) || maxNumber <= 1) {
    alert("Please enter a valid number greater than 1.");
    return;
  }

  randomNumber = Math.floor(Math.random() * maxNumber) + 1;

  document.querySelector(".container").style.display = "none";
  document.querySelector(".game-screen").style.display = "block";
  document.getElementById("maxDisplay").textContent = maxNumber;

}


// Step- 5: Guessing logic i.e., defining checkGuess()

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  const message = document.getElementById("message");

  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number."
    return;
  }

  if (guess === randomNumber) {
    message.textContent = "Congrats! You are Right!";
    document.getElementById("restartBtn").style.display = "inline-block";
  } else if (guess < randomNumber) {
    message.textContent = "Your guess is lower than expected.";
  } else {
    message.textContent = "Your guess is higher than expected.";
  }

}


// Step- 6: Quitting the game i.e., defining quitGame()

function quitGame() {
  const message = document.querySelector("#message");

  message.innerHTML = "You Quit the Game.";

  document.getElementById("restartBtn").style.display = "inline-block";

  // Optionally disable guess input and submit button (Totally optional to write)
  document.getElementById("guessInput").disabled = true;
  document.getElementById("submitBtn").disabled = true;

}


// Step- 7: Restarting the game i.e., defining resetGame()

function resetGame() {
  // Reset values
  randomNumber = null;
  maxNumber = null;

  // Clear inputs and messages
  document.getElementById("input").value = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";

  // Reset screens 
  document.querySelector(".container").style.display = "block";
  document.querySelector(".game-screen").style.display = "none";

  // Hide Restart button
  document.querySelector("#restartBtn").style.display = "none";

  // Re- enable input (Optional to write)
  document.getElementById("guessInput").disabled = false;
  document.getElementById("submitBtn").disabled = false;

}