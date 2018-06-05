// check and see which of the 7 spots have players by checking bets(chips)
// deal one card to each spot with chips with card face up
// dealer deals 1 card face up to itself
// deal another round of cards face up
// dealer deal another card to itself face down
// go to each player starting from left to right
// if player says hit deal another card to the player
// if card numbers are greater than or equal to 22 take cards
// if player says stand, then move to next player
// if all players have said stand or have no cards then dealer shows second card
// if dealers hand is 17 or greater then stay, else draw a card
// if dealers hand is greater than players hand and less than 22 then dealer wins
// else dealer loses and player wins

var dealer;
var player1 = true;
var player2 = false;
var player3 = false;
var player4 = false;
var player5 = false;
var player6 = false;
var player7 = false;
var numberOfPlayers;
var playerBet;
var bet = false;
var skipTurn = false;
var activePlayer = 1;
var betsPlaced = [];
var playerTurn = document.getElementById('player');
var card = document.getElementById('card');
var bet1 = document.getElementsByClassName('bet1')[0];
var firstHand = document.getElementsByClassName('player1')[0];
var dealerHand = document.getElementsByClassName('dealer')[0];

var cardDeck = {
  1: 'images/aceOfSpades.jpg',
  2: 'images/twoOfSpades.jpg',
  3: 'images/threeOfSpades.jpg',
  4: 'images/fourOfSpades.jpg',
  5: 'images/fiveOfSpades.jpg',
  6: 'images/sixOfSpades.jpg',
  7: 'images/sevenOfSpades.jpg',
  8: 'images/eightOfSpades.jpg',
  9: 'images/nineOfSpades.jpg',
  10: 'images/tenOfSpades.jpg',
  11: 'images/jackOfSpades.jpg',
  12: 'images/queenOfSpades.jpg',
  13: 'images/kingOfSpades.jpg',
  14: 'images/aceOfHearts.jpg',
  15: 'images/twoOfHearts.jpg',
  16: 'images/threeOfHearts.jpg',
  17: 'images/fourOfHearts.jpg',
  18: 'images/fiveOfHearts.jpg',
  19: 'images/sixOfHearts.jpg',
  20: 'images/sevenOfHearts.jpg',
  21: 'images/eightOfHearts.jpg',
  22: 'images/nineOfHearts.jpg',
  23: 'images/tenOfHearts.jpg',
  24: 'images/jackOfHearts.jpg',
  25: 'images/queenOfHearts.jpg',
  26: 'images/kingOfHearts.jpg',
  27: 'images/aceOfDiamonds.jpg',
  28: 'images/twoOfDiamonds.jpg',
  29: 'images/threeOfDiamonds.jpg',
  30: 'images/fourOfDiamonds.jpg',
  31: 'images/fiveOfDiamonds.jpg',
  32: 'images/sixOfDiamonds.jpg',
  33: 'images/sevenOfDiamonds.jpg',
  34: 'images/eightOfDiamonds.jpg',
  35: 'images/nineOfDiamonds.jpg',
  36: 'images/tenOfDiamonds.jpg',
  37: 'images/jackOfDiamonds.jpg',
  38: 'images/queenOfDiamonds.jpg',
  39: 'images/kingOfDiamonds.jpg',
  40: 'images/aceOfClubs.jpg',
  41: 'images/twoOfClubs.jpg',
  42: 'images/threeOfClubs.jpg',
  43: 'images/fourOfClubs.jpg',
  44: 'images/fiveOfClubs.jpg',
  45: 'images/sixOfClubs.jpg',
  46: 'images/sevenOfClubs.jpg',
  47: 'images/eightOfClubs.jpg',
  48: 'images/nineOfClubs.jpg',
  49: 'images/tenOfClubs.jpg',
  50: 'images/jackOfClubs.jpg',
  51: 'images/queenOfClubs.jpg',
  52: 'images/kingOfClubs.jpg',
};


// find out how many players
document.getElementById('submit').addEventListener('click', function() {
  numberOfPlayers = document.getElementById('playerCount').value;
  console.log(numberOfPlayers);
  return numberOfPlayers;
});


// switch player
var switchPlayer = function() {
  if (activePlayer === 7) {
    activePlayer = 1;
  } else {
    activePlayer++;
  }



  // This line returns a collection
  var i = 0;
  var bet = document.getElementsByClassName('bet' + activePlayer)[0];

  // This line iterates throught the collection
  for (let i = 0; i < bet.length; i++) {
    if(bet[i].textContent === '') {
      bet.value === false;
    } else {
      bet.value === true;
    }
  }

  // pushing amount of players to array
  if (bet.value === true) {
    betsPlaced.push(1);
    console.log(betsPlaced);
  }

  if (betsPlaced.length === 0) {
    player1 === true;
    playerTurn.textContent === 1;
  } else if (betsPlaced.length === 1) {
    player2 === true;
    playerTurn.textContent === 2;
  } else if (betsPlaced.length === 2) {
    player3 === true;
    playerTurn.textContent === 3;
  } else if (betsPlaced.length === 3) {
    player4 === true;
    playerTurn.textContent === 4;
  } else if (betsPlaced.length === 4) {
    player5 === true;
    playerTurn.textContent === 5;
  } else if (betsPlaced.length === 5) {
    player6 === true;
    playerTurn.textContent === 6;
  } else if (betsPlaced.length === 7) {
    player7 === true;
    playerTurn.textContent === 7;
  }

  // variable activePlayer can only be a number between 1 - 7;
  if (activePlayer === 1) {
    player1 === true;
  } else if (activePlayer === 2) {
    player2 === true;
  } else if (activePlayer === 3) {
    player3 === true;
  } else if (activePlayer === 4) {
    player4 === true;
  } else if (activePlayer === 5) {
    player5 === true;
  } else if (activePlayer === 6) {
    player6 === true;
  } else if (activePlayer === 7) {
    player7 === true;
  } else {
    player1 === false;
    player2 === false;
    player3 === false;
    player4 === false;
    player5 === false;
    player6 === false;
    player7 === false;
  }
}

// when you click place bet button place bet amount in bet div and switch player
document.getElementById('bet').addEventListener('click', function() {
  playerBet = document.getElementById('amount').value;
  if (player1 === true) {
    document.getElementsByClassName('bet1')[0].textContent = playerBet;
    console.log(playerBet);
  } else if (player2 === true) {
    document.getElementsByClassName('bet2')[0].textContent = playerBet;
  } else if (player3 === true) {
    document.getElementsByClassName('bet3')[0].textContent = playerBet;
  } else if (player4 === true) {
    document.getElementsByClassName('bet4')[0].textContent = playerBet;
  } else if (player5 === true) {
    document.getElementsByClassName('bet5')[0].textContent = playerBet;
  } else if (player6 === true) {
    document.getElementsByClassName('bet6')[0].textContent = playerBet;
  } else if (player7 === true) {
    document.getElementsByClassName('bet7')[0].textContent = playerBet;
  }
  switchPlayer();
});

// deal first card to player
var deal = function() {
  if(bet1.textContent !== '' && bet1.textContent >= 5) {
    var playerCard1 = document.createElement('img');
    playerCard1.src = "images/aceOfSpades.jpg";
    playerCard1.classList.add('image');
    firstHand.appendChild(playerCard1);
    var dealerCard1 = document.createElement('img');
    dealerCard1.src = "images/twoOfSpades.png";
    dealerCard1.classList.add('image');
    dealerHand.appendChild(dealerCard1);
    var playerCard2 = document.createElement('img');
    playerCard2.src = "images/threeOfSpades.png";
    playerCard2.classList.add('imageCard2');
    firstHand.appendChild(playerCard2);
    var dealerCard2 = document.createElement('img');
    dealerCard2.src = "images/cardback.png";
    dealerCard2.classList.add('imageDealerCard2');
    dealerHand.appendChild(dealerCard2);
  }
}
document.getElementById('deal').addEventListener("click", deal);


// player hits function
document.getElementById('hit').addEventListener('click', function() {
  var playerCard3 = document.createElement('img');
  playerCard3.src = cardDeck['20'];
  playerCard3.classList.add('imagePlayerCard3');
  firstHand.appendChild(playerCard3);
});

// flip dealers facedown card
document.getElementById('stand').addEventListener('click', function() {
  function() {
    document.removeElement('img');
  }
});
