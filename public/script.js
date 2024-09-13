// * Definition
/* Replicate the rock paper scissor game on the browser console.
The computer must choose one of the options randomly.
Keep track of the score of both players.
The user must be able to write their option case insensitively.
The player that reaches a score of 5 first wins.
*/

// * Pseudo code
/*  
1 Get a choice from the user
2 Get a choice from the computer and display it
3 Declare if the user won, lose or is a tie
4 check:
5 if the user won, add 1 to the user counter
6 else if the user lose, add 1 to the computer counter
7 else if there is a tie keep the score as they were
*/

// TODO
/* 
- Function to get human choice V
- Function to make the computer choose between 3 options V
- logic that compares both choices and declares a winner. V
- Function that uses the last function 5 times 
  and declares a winner or a tie at the end.
*/

// ? investigate
/* 
- How to make a prompt value case insensitively V
link: Use toUpperCase or localeCompare
- How to randomly choose between three options V
link: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
- How to repeat a function 5 times
*/

let humanScore = 0;
let computerScore = 0;
let options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
	// Chooses an option through an index that is generated randomly
	// with math.random multiplied by the total amount of options
	// "| 0" is used to round the result to an integer
	// it´s faster than math.floor
	let computerChoice = options[(Math.random() * options.length) | 0];
	return computerChoice;
}

function getHumanChoice() {
	choice = window.prompt("choose one; Rock, Paper or scissors");
	choice = choice.toUpperCase();
	if (options.includes(choice)) {
		return choice;
	} else {
		return "n ot an option";
	}
}

function declareWinner() {
	console.log("\nFinal Result:");
	switch (true) {
		case humanScore === computerScore:
			console.log("It's a tie!");
			break;
		case humanScore > computerScore:
			console.log("Human wins!");
			break;
		case humanScore < computerScore:
			console.log("computer wins!");
		default:
			break;
	}
}

function playRound() {
	let humanChoice = getHumanChoice();
	let computerChoice = getComputerChoice();
	console.log(humanChoice);
	console.log(computerChoice);

	switch (true) {
		case humanChoice == computerChoice:
			console.log("It's a Tie!");
			break;
		case humanChoice === "ROCK" && computerChoice === "PAPER":
			console.log("Rock loses to paper, Computer Wins!!");
			computerScore++;
			break;
		case humanChoice === "ROCK" && computerChoice === "SCISSORS":
			console.log("Rock beats scissors, human wins!!");
			humanScore++;
			break;

		case humanChoice === "PAPER" && computerChoice === "SCISSORS":
			console.log("Paper loses to scissors, Computer Wins!!");
			computerScore++;
			break;
		case humanChoice === "PAPER" && computerChoice === "ROCK":
			console.log("Paper beats rock, human wins!!");
			humanScore++;
			break;

		case humanChoice === "SCISSORS" && computerChoice === "ROCK":
			console.log("Scissors loses to rock, Computer Wins!!");
			computerScore++;
			break;
		case humanChoice === "SCISSORS" && computerChoice === "PAPER":
			console.log("Scissors beats Paper, human wins!!");
			humanScore++;
			break;

		default:
			console.log("Use one of the options please");
			break;
	}

	console.log("Scores:");
	console.log(`Human: ${humanScore}`);
	console.log(`Computer: ${computerScore}`);
}

function playGame() {
	// Calls the function an amount equal to length
	Array.from({ length: 5 }, () => playRound());
	declareWinner();
}

/* playGame(); */
