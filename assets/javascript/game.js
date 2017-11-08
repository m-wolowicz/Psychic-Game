/* BASICS FOR THE GAME:
Computer makes a random letter choice
User selects a letter
Make sure user selection is a letter
Capture the computer's choice and the user's guess
Compare the choice and the guess
Determine Wins & Losses
Count the attempts made by user
Record all guesses made by user
When user wins, reset game, but not the stats
When user runs out of guesses, reset game, but not the stats
Display all game stats to the user */

// Create an Array of options for both computer and user to choose from
var theAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables to use as game stats. They start at 0; max number of guesses; and an empty array.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var soFar = [];
var compChoice; //declared only

// Initially creating a new computer choice
	compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
		console.log("The computer has chosen the letter: " + compChoice);

//Script that starts every time the user presses a key, on the key release (onkeyup):
document.onkeyup = function(event) {

	//User presses a key, record what key was pressed under var userGuess and convert to lower case.
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	//Log all keys pressed by user into soFar by pushing them into the empty array, DO NOT LOG WRONG KEYS display to user.
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		soFar.push(userGuess);
		document.getElementById("soFar").innerHTML = soFar.join(", ");
	}


	//Check if the user entered the correct letters
		if (event.keyCode >= 65 && event.keyCode <= 90) { //If the letter pressed IS part of the alphabet, then run the comparison:
			//If user guesses right, increase the wins count, reset guesses left, reset so far, pick a new letter:
			if (userGuess == compChoice) {
				wins++;
				guessesLeft--;
				soFar = [];
				guessesLeft = 10;
				//Display updated stats to user:
				document.getElementById("soFar").innerHTML = soFar.join(", ");
				document.getElementById("wins").innerHTML = wins;
				document.getElementById("guessesLeft").innerHTML = guessesLeft;
				document.getElementById("guessesLeft").innerHTML = guessesLeft;
				// Alert the user
				alert("You ARE a psychic! How did you know I was thinking of the letter '" + userGuess + "' ?");
				alert("Do you want to try again?");
				//Choose another letter
				compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
				console.log("The computer has chosen the letter: " + compChoice);	

			} else { //If user guesses wrong, increase the losses count, and decrease number of guessesLeft.
				losses++;
				guessesLeft--;
				//Display updated stats to user:
				document.getElementById("losses").innerHTML = losses;
				document.getElementById("guessesLeft").innerHTML = guessesLeft;
			}
		} else { //If user input is not a letter from the alphabet
			// Alert the user
			alert("Please be sure to select a letter from the Alphabet (from a to z)");
		}

	//When the user has no more guesses left, reset the counters back to zero.
		//If the guessesLeft == 0, reset guessesLeft back to 10, and empty the soFar guesses, pick a new letter.
		if (guessesLeft == 0) {
			guessesLeft = 10;
			soFar = [];
			//Display updated stats to user:
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			document.getElementById("soFar").innerHTML = soFar.join(", ");
			// Alert the user
			alert("GAME OVER")
			alert("OH NO! Looks like you ran out of guesses. Do you want to try again?")
			//now Choose another letter
			compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
			console.log("The computer has chosen the letter: " + compChoice);
		}	
}

