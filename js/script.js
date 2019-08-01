function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(moveId){
  if(moveId == 1){
    return 'kamień';
  } else if(moveId == 2){
    return 'papier';
  } else if(moveId == 3){
    return 'nożyce';
  }
}
function displayResult(computerMove, playerMove){
  	printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  if(computerMove =='kamień' && playerMove =='papier'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove =='papier' && playerMove =='nożyce'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove =='nożyce' && playerMove =='kamień'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove =='kamień' && playerMove =='kamień'){
		printMessage('Remis!');
  } else if(computerMove =='papier' && playerMove =='papier'){
    printMessage('Remis!');
  } else if(computerMove =='nożyce' && playerMove =='nożyce'){
    printMessage('Remis!');
  } else if(playerMove == 'nieznany ruch'){
    printMessage('Co Ty robisz!');
  } else {
    printMessage('Przegrywasz!');
  }
}


  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
console.log(computerMove, playerMove);
displayResult(computerMove, playerMove);
