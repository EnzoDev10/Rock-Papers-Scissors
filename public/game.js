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
	playerScoreDisplay.textContent = playerScore;
	computerScoreDisplay.textContent = computerScore;

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
						++playerScore;
						playerScoreDisplay.textContent = playerScore;

						break;
					case 'Lose':
						resultDisplay.textContent = 'You Lose!';
						computerScore++;
						computerScoreDisplay.textContent = computerScore;

						break;
					case 'Tie':
						resultDisplay.textContent = "It's a Tie!";
					default:
						break;
				}
				playerScoreDisplay.textContent = playerScore;
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

function showResult(playerChoice, computerChoice) {

	switch (playerChoice) {
		case 'ROCK':
			playerChoiceDisplay.textContent = '🪨';
			break;
		case 'PAPER':
			playerChoiceDisplay.textContent = '📰';
			break;
		case 'SCISSORS':
			playerChoiceDisplay.textContent = '✂️';
			break;
	}
	switch (computerChoice) {
		case 'ROCK':
			computerChoiceDisplay.textContent = '🪨';
			break;
		case 'PAPER':
			computerChoiceDisplay.textContent = '📰';
			break;
		case 'SCISSORS':
			computerChoiceDisplay.textContent = '✂️';
			break;
	}
	console.log(playerChoiceDisplay)
	console.log(computerChoiceDisplay)
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

function playGame() {
	// Calls the function an amount equal to length
	Array.from({ length: 5 }, () => playRound());
	compareScores();
}

/* playGame(); */
