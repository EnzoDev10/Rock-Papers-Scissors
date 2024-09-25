// TODO
/* 
- After a game has ended let the user know if they won or lose
- Make the background color change, on each game or after a certain time(optional) 
- Polish the overall code as it's kind of messy and repeats often
*/

let playerScore = 0;
let computerScore = 0;
const options = ['ROCK', 'PAPER', 'SCISSORS'];

const startGameBtn = document.querySelector('button');
const choiceBtns = document.querySelectorAll('input');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const resultDisplay = document.querySelector('#result');

let playerChoiceDisplay = document.querySelector('#player-choice');
let computerChoiceDisplay = document.querySelector('#computer-choice');

startGameBtn.addEventListener('click', () => {
	toggleBtns();
	playRound();
});

function toggleBtns() {
	choiceBtns.forEach((btn) => {
		btn.disabled = false;
	});
	startGameBtn.disabled = true;
}

function getComputerChoice() {
	// Chooses an option through an index that is generated randomly
	// with math.random multiplied by the total amount of options
	// "| 0" is used to round the result to an integer
	// it´s faster than math.floor
	let computerChoice = options[(Math.random() * options.length) | 0];
	return computerChoice;
}

function playRound() {
	resetElements();
	choiceBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (playerScore < 5 && computerScore < 5) {
				let playerChoice = e.target.id.toUpperCase();
				let computerChoice = getComputerChoice();
				let result = compareChoices(playerChoice, computerChoice);
				showResult(playerChoice, computerChoice);

				switch (result) {
					case 'Win':
						resultDisplay.textContent = 'You win!';
						playerScoreDisplay.textContent = playerScore;

						break;
					case 'Lose':
						resultDisplay.textContent = 'You Lose!';
						computerScoreDisplay.textContent = computerScore;

						break;
					case 'Tie':
						resultDisplay.textContent = "It's a Tie!";
					default:
						break;
				}
			} else {
				choiceBtns.forEach((btn) => {
					btn.disabled = true;
				});
				startGameBtn.disabled = false;
				return;
			}
		});
	});
}

function resetElements() {
	playerScore = 0;
	computerScore = 0;
	playerScoreDisplay.textContent = playerScore;
	computerScoreDisplay.textContent = computerScore;
	playerChoiceDisplay.textContent = 'Player';
	computerChoiceDisplay.textContent = 'computer';

	resultDisplay.textContent = '';
}

function showResult(playerChoice, computerChoice) {
	for (let i = 0; i < arguments.length; i++) {
		let display;
		if (i === 0) {
			display = playerChoiceDisplay;
		} else {
			display = computerChoiceDisplay;
		}
		switch (arguments[i]) {
			case 'ROCK':
				display.textContent = '🪨';
				break;
			case 'PAPER':
				display.textContent = '📰';
				break;
			case 'SCISSORS':
				display.textContent = '✂️';
				break;
		}
	}
}

function compareChoices(playerChoice, computerChoice) {
	switch (true) {
		case playerChoice == computerChoice:
			return 'Tie';
		case playerChoice === 'ROCK' && computerChoice === 'PAPER':
			computerScore++;
			return 'Lose';
		case playerChoice === 'ROCK' && computerChoice === 'SCISSORS':
			playerScore++;
			return 'Win';

		case playerChoice === 'PAPER' && computerChoice === 'SCISSORS':
			computerScore++;
			return 'Lose';
		case playerChoice === 'PAPER' && computerChoice === 'ROCK':
			playerScore++;
			return 'Win';

		case playerChoice === 'SCISSORS' && computerChoice === 'ROCK':
			computerScore++;
			return 'Lose';
		case playerChoice === 'SCISSORS' && computerChoice === 'PAPER':
			playerScore++;
			return 'Win';

		default:
			console.log('Use one of the options please');
			break;
	}
}

function compareScores() {
	console.log('\nFinal Result:');
	switch (true) {
		case playerScore === computerScore:
			console.log("It's a tie!");
			break;
		case playerScore > computerScore:
			console.log('Human wins!');
			break;
		case playerScore < computerScore:
			console.log('computer wins!');
		default:
			break;
	}
}
