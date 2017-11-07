/* User selects a letter
Get the computer to make a random letter choice
Capture the computer's choice and the user's guess
Compare the choice and the guess
Determine Wins & Losses
Count the attempts made by user
Record all guesses made by user
Display all game stats to the user */


// Create an Array of options for both computer and user to choose from
var theAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables to use as game stats. They start at 0; max number of guesses; and an empty array.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var soFar = [];

//Script starts when user presses a key, on the key release (onkeyup):
document.onkeyup = function(event) {

	// The computer picks a random letter from theAlphabet, record this letter under var compChoice.
	var compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
		console.log(compChoice);

	//User presses a key, record what key was pressed under var userGuess and convert to lower case.
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	//Log all keys pressed by user into soFar by pushing them into the empty array, display to user.
	soFar.push(userGuess);
	document.getElementById("soFar").innerHTML = soFar.join(", ");

	//Compare the userGuess and the compChoice to determine wins and losses
		//If the computer's choice and the user's guess is the same, increase the wins count, and decrease number of guessesLeft.
		if (compChoice === userGuess) {
			wins++;
			guessesLeft--;
			//Display updated stats to user:
			document.getElementById("wins").innerHTML = wins;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			alert("You ARE a psychic! How did you know I was thinking of the letter '" + userGuess + "' ?");


		} else { //If it's not the same, increase the losses count, and decrease number of guessesLeft.
			losses++;
			guessesLeft--;
			//Display updated stats to user:
			document.getElementById("losses").innerHTML = losses;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			alert("Sorry! '" + userGuess + "' is NOT the letter I am thinking of right now. Try again, you have " + guessesLeft + " guesses left.")
		}

	//When the user has no more guesses left, reset the counters back to zero.
		//If the guessesLeft == 0, reset guessesLeft back to 10, and empty the soFar guesses.
		if (guessesLeft == 0) {
			guessesLeft = 10;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			soFar = [];
			document.getElementById("soFar").innerHTML = soFar.join(", ");
			alert("OH NO! You have run out of guesses. Don't worry, keep trying!")
		}	
}