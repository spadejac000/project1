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

//deal randomly give cards to player/dealer from a deck
//bet  place money on table       √√√
//hit / draw          draw a new card from a deck and add it to current hand value   √√√
//stand     stop current player turn and go to next
//winner    evaluation on who is closest to 21

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
var dealerCards;
var dealerArray = [];
var playerArray = [];

var cardsArray = [
  {
    rank: 1,
    suit: "clubs",
    cardImage: "images/AC.png",
  },
  {
    rank: 2,
    suit: "clubs",
    cardImage: "images/2C.png",
  },
  {
    rank: 3,
    suit: "clubs",
    cardImage: "images/3C.png",
  },
  {
    rank: 4,
    suit: "clubs",
    cardImage: "images/4C.png",
  },
  {
    rank: 5,
    suit: "clubs",
    cardImage: "images/5C.png",
  },
  {
    rank: 6,
    suit: "clubs",
    cardImage: "images/6C.png",
  },
  {
    rank: 7,
    suit: "clubs",
    cardImage: "images/7C.png",
  },
  {
    rank: 8,
    suit: "clubs",
    cardImage: "images/8C.png",
  },
  {
    rank: 9,
    suit: "clubs",
    cardImage: "images/9C.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/10C.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/JC.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/QC.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/KC.png",
  },
  {
    rank: 1,
    suit: "diamonds",
    cardImage: "images/AD.png",
  },
  {
    rank: 2,
    suit: "diamonds",
    cardImage: "images/2D.png",
  },
  {
    rank: 3,
    suit: "diamonds",
    cardImage: "images/3D.png",
  },
  {
    rank: 4,
    suit: "diamonds",
    cardImage: "images/4D.png",
  },
  {
    rank: 5,
    suit: "diamonds",
    cardImage: "images/5D.png",
  },
  {
    rank: 6,
    suit: "diamonds",
    cardImage: "images/6D.png",
  },
  {
    rank: 7,
    suit: "diamonds",
    cardImage: "images/7D.png",
  },
  {
    rank: 8,
    suit: "diamonds",
    cardImage: "images/8D.png",
  },
  {
    rank: 9,
    suit: "diamonds",
    cardImage: "images/9D.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/10D.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/JD.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/QD.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/KD.png",
  },
  {
    rank: 1,
    suit: "hearts",
    cardImage: "images/AH.png",
  },
  {
    rank: 2,
    suit: "hearts",
    cardImage: "images/2H.png",
  },
  {
    rank: 3,
    suit: "hearts",
    cardImage: "images/3H.png",
  },
  {
    rank: 4,
    suit: "hearts",
    cardImage: "images/4H.png",
  },
  {
    rank: 5,
    suit: "hearts",
    cardImage: "images/5H.png",
  },
  {
    rank: 6,
    suit: "hearts",
    cardImage: "images/6H.png",
  },
  {
    rank: 7,
    suit: "hearts",
    cardImage: "images/7H.png",
  },
  {
    rank: 8,
    suit: "hearts",
    cardImage: "images/8H.png",
  },
  {
    rank: 9,
    suit: "hearts",
    cardImage: "images/9H.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/10H.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/JH.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/QH.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/KH.png",
  },
  {
    rank: 1,
    suit: "spades",
    cardImage: "images/AS.png",
  },
  {
    rank: 2,
    suit: "spades",
    cardImage: "images/2S.png",
  },
  {
    rank: 3,
    suit: "spades",
    cardImage: "images/3S.png",
  },
  {
    rank: 4,
    suit: "spades",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: 5,
    suit: "spades",
    cardImage: "images/king-of-diamonds.png",
  },
  {
    rank: 6,
    suit: "spades",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: 7,
    suit: "spades",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: 8,
    suit: "spades",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: 9,
    suit: "spades",
    cardImage: "images/king-of-diamonds.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/king-of-diamonds.png",
  },
];

// find out how many players
document.getElementById('submit').addEventListener('click', function() {
  numberOfPlayers = document.getElementById('playerCount').value;
  console.log(numberOfPlayers);
  return numberOfPlayers;
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
document.getElementById('hit').addEventListener('click', drawCard);

function removeElement(elementClassName) {
  console.log('working');
  // Removes an element from the document
  var element = document.getElementsByClassName(elementClassName)[0];
  element.parentNode.removeChild(element);
}

// flip dealers facedown card
document.getElementById('stand').addEventListener('click', function() {

  var faceDownCard = document.getElementsByClassName('imageDealerCard2')[0];
  removeElement('imageDealerCard2');
  var dealerFaceUpCard2 = document.createElement('img');
  dealerFaceUpCard2.src = cardDeck['30'];
  dealerFaceUpCard2.classList.add('imageDealerFaceUpCard2');
  dealerHand.appendChild(dealerFaceUpCard2);
  dealerProcess();
});

// dealer process
    // get random number 1 -52
    // get card w/ random number
    // assign to player/dealer
    // repeat if needed up to four
    // check to see if the dealer has 21 or not
var dealerProcess = function() {
  // find out current hand value
  drawCard();
  // push drawn card into array
  var variable = drawCard();
  console.log(variable);
  // push 2nd drawn card into array
  // combine cards rank in array and see if it's 17 or less
 // cardsArray[i].rank
 var placeholder;
  var dealerCards = placeholder;
  while(dealerCard < 17) {
    // draw a card
    var value = placeholder;// drawCard function
    // add new card value to original dealerCards
  }
    //determine winner
}

// This function draws a random card for anyone
var drawCard = function() {
  var cardElement = document.createElement('img');
  var randomCard = function() {
    return cardsArray[Math.floor(Math.random * 51)];
  }
  cardElement.setAttribute('src', randomCard());
  document.getElementById('dealer').appendChild(cardElement);
}

// when you click place bet button place bet amount in bet div and switch player
document.getElementById('bet').addEventListener('click', function() {
  playerBet = document.getElementById('amount').value;
});
