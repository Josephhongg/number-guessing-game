// generates a random between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;
// keeps track of how many guesses the user makes
let guessCount = 0;
// set to false, changes to true when the correct number is guessed
let correctGuess = false;

while (!correctGuess) {
	// ask the user to guess a number
	let userGuess = parseInt(prompt("Guess a number"));
	// increment guessCount by 1
	guessCount++;
	// checks the user's guess
	if (userGuess === secretNumber) {
		// set the correctGuess to true, exits loop
		correctGuess = true;
		console.log("Correct guess!");
	} else if (userGuess < secretNumber) {
		userGuess++;
		console.log("Too low. Try again");
	} else if (userGuess > secretNumber) {
		guessCount++;
		console.log("Too high. Try again");
	} else {
		console.log("Invalid input. Try again");
	}
}
console.log("Well done! You guessed the number in " + guessCount + " tries");