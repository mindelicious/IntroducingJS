
// New game button
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

// Player pick
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('ROCK') });
pickPaper.addEventListener('click', function() { playerPick('PAPER') });
pickScissors.addEventListener('click', function() { playerPick('SCISSORS') });

// Start Value
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// Game element
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

// Start game
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

// Function, New Game button
function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
  }

}

// Player pick
function playerPick(playerPick) {
    console.log(playerPick);
}

// Computer pick
Math.floor(Math.random()*3)

function getComputerPick() {
    var possiblePicks = ['ROCK', 'PAPER', 'SCISSORS'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

// Com pick vs. Plr pick
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

}
// Granting points & Logic
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
        (computerPick == 'ROCK' &&  playerPick == 'SCISSORS') ||
        (computerPick == 'SCISSORS' &&  playerPick == 'PAPER') ||
        (computerPick == 'PAPER' &&  playerPick == 'ROCK')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }

}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
  setGamePoints();
  endGame(player, computer);
 
}

//Score update
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

// Ending Game
  function endGame(player, computer) {
  if(player.score == 10) {
    alert("Nice, You Won!!");
    gameState = "ended";
    setGameElements();
 
  } else if (computer.score == 10) {
    alert("Don't cry but You Lost. Try again");
    gameState = "ended";
    setGameElements();
  }
}
