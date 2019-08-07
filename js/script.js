{const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const stone = document.getElementById('stone');
const playerResult = document.getElementById('player-result');
const computerResult = document.getElementById('computer-result');

rock.addEventListener('click', function () {
	let playerMove = "kamień";
	const computerMove = randomComputerMove();
	displayResult(computerMove, playerMove);
	console.log('gracz wybrał: ' + playerMove);
	const winner = displayResult(computerMove, playerMove);
	displayCount(winner);
});

paper.addEventListener('click', function (){
	let playerMove = "papier";
	const computerMove = randomComputerMove();
	displayResult(computerMove, playerMove);
	console.log('gracz wybrał: ' + playerMove);
	const winner = displayResult(computerMove, playerMove);
	displayCount(winner);
});

scissors.addEventListener('click', function () {
	let playerMove = "nożyce";
	const computerMove = randomComputerMove();
	displayResult(computerMove, playerMove);
	console.log('gracz wybrał: ' + playerMove);
	const winner = displayResult(computerMove, playerMove);
	displayCount(winner);
});

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function (moveId){
  if(moveId == 1){
    return 'kamień';
  } else if(moveId == 2){
    return 'papier';
  } else if(moveId == 3){
    return 'nożyce';
  }
}
const displayResult = function (computerMove, playerMove){
	clearMessages();
	printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
	switch(playerMove) {
			case 'kamień':
					if (computerMove === 'kamień') {
						printMessage('Remis!');
						return 'draw';
					}
					if (computerMove === 'papier') {
						printMessage('Wygrywa komputer!');
						return 'computer';
					}
					if (computerMove === 'nożyce') {
						printMessage('Wygrywasz!');
						return 'player';
					}
			case 'papier':
					if (computerMove === 'kamień') {
						printMessage('Wygrywasz!');
						return 'player';
					}
					if (computerMove === 'papier') {
						printMessage('Remis!');
						return 'draw';
					}
					if (computerMove === 'nożyce') {
						printMessage('Wygrywa komputer!');
						return 'computer';
					}
			case 'nożyce':
					if (computerMove === 'kamień') {
						printMessage('Wygrywa komputer!');
						return 'computer';
					}
					if (computerMove === 'papier') {
						printMessage('Wygrywasz!');
						return 'player';
					}
					if (computerMove === 'nożyce') {
						printMessage('Remis!');
						return 'draw';
					}
	}

}
/* function displayResult(computerMove, playerMove){
	clearMessages();
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  if(computerMove =='kamień' && playerMove =='papier'){
    printMessage('Ty wygrywasz!');
		return 'player';
  } else if(computerMove =='papier' && playerMove =='nożyce'){
    printMessage('Ty wygrywasz!');
		return 'player';
  } else if(computerMove =='nożyce' && playerMove =='kamień'){
    printMessage('Ty wygrywasz!');
		return 'player';
  } else if(computerMove =='kamień' && playerMove =='kamień'){
    printMessage('Remis!');
		return 'draw';
  } else if(computerMove =='papier' && playerMove =='papier'){
    printMessage('Remis!');
		return 'draw';
  } else if(computerMove =='nożyce' && playerMove =='nożyce'){
    printMessage('Remis!');
		return 'draw';
  } else {
    printMessage('Przegrywasz!');
		return 'computer';
  }
}
*/
const randomComputerMove = function () {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Komputer wylosował: ' + randomNumber + ' czyli: ' + getMoveName(randomNumber));
  switch (randomNumber) {
		case 1:
			return 'kamień';
		case 2:
			return 'papier';
		case 3:
			return 'nożyce';
	}
}

const displayCount = function(winner) {
	console.log(winner);
	switch (winner) {
			case 'player':
					let playerScore = Number(playerResult.innerText);
					playerScore = playerScore + 1;
					playerResult.innerText = playerScore.toString();
					break;
			case 'computer':
					let computerScore = Number(computerResult.innerText);
					computerScore = computerScore + 1;
					computerResult.innerText = computerScore.toString();
					break;
			default:
					break;
	}
};
}
