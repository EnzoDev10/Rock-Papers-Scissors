// TODO
/* 
- Make the background color change, on each game or after a certain time(optional) 

*/

let playerScore = 0;
let computerScore = 0;

const startGameBtn = document.querySelector('button');
const choiceBtns = document.querySelectorAll('input');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const resultDisplay = document.querySelector('#result');
const resultSection = document.querySelector('#result-section');

let playerChoiceDisplay = document.querySelector('#player-choice');
let computerChoiceDisplay = document.querySelector('#computer-choice');

startGameBtn.addEventListener('click', () => {
	toggleBtns(false, true);
	playGame();
});

function getComputerChoice() {
	const options = ['ROCK', 'PAPER', 'SCISSORS'];

	// Picks one option randomly.
	// "| 0" rounds the result to an integer.
	//  (^it's faster than math.floor)
	return options[(Math.random() * options.length) | 0];
}

function playGame() {
	resetElements();
	choiceBtns.forEach((btn) => {
		btn.addEventListener('click', (choice) => {
			if (playerScore < 5 && computerScore < 5) {
				let playerChoice = choice.target.id;
				let computerChoice = getComputerChoice();
				let result = roundResult(playerChoice, computerChoice);
				showResult(playerChoice, computerChoice, result);
				return;
			} else {
				declareWinner(playerScore, computerScore);
				toggleBtns(true, false);
				return;
			}
		});
	});
}

function toggleBtns(choicebtnsBolean, StartGameBtnBolean) {
	choiceBtns.forEach((btn) => {
		btn.disabled = choicebtnsBolean;
	});
	startGameBtn.disabled = StartGameBtnBolean;
}

function resetElements() {
	playerScore = 0;
	computerScore = 0;
	playerScoreDisplay.textContent = playerScore;
	computerScoreDisplay.textContent = computerScore;

	playerChoiceDisplay.textContent = 'Player';
	computerChoiceDisplay.textContent = 'VS computer';

	resultDisplay.textContent = '';
	resultSection.style.border = 'none';
}

function roundResult(playerChoice, computerChoice) {
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
			console.log('Something went wrong!');
			break;
	}
}

function showResult(playerChoice, computerChoice, result) {
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

	switch (result) {
		case 'Win':
			resultDisplay.textContent = 'You win!';
			playerScoreDisplay.textContent = playerScore;
			break;
		case 'Lose':
			resultDisplay.textContent = 'You Lose!';
			computerScoreDisplay.textContent = computerScore;
			break;
		default:
			resultDisplay.textContent = "It's a Tie!";
			break;
	}
}

function declareWinner(playerScore, computerScore) {
	playerChoiceDisplay.textContent = '';
	computerChoiceDisplay.textContent = '';

	if (playerScore > computerScore) {
		resultSection.style.border = '5px solid green';
		resultDisplay.textContent = 'Player Won!';
	} else {
		resultSection.style.border = '5px solid red';
		resultDisplay.textContent = 'Player Lose!';
	}
}
