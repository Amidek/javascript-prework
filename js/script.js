const scissors = document.getElementById('scissors');
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
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }
}

function displayResult(computerMove, playerMove){
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

function randomComputerMove() {
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
