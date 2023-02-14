// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess
    const guess = document.getElementById("guess").value;
    tries++;

    // Compare the guess to the random number
    if (guess == randomNumber) {
        document.getElementById("message").innerHTML = "Congratulations, you guessed the number!";
        document.getElementById("tries").innerHTML = "Number of tries: " + tries;
    } else if (guess > randomNumber) {
        document.getElementById("message").innerHTML = "Your guess is too high, try again.";
    } else if (guess < randomNumber) {
        document.getElementById("message").innerHTML = "Your guess is too low, try again.";
    }
}