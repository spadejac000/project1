// global variables
var dealer;
var player1 = true;
var numberOfPlayers;
var playerBet;
var bet = false;
var skipTurn = false;
var activePlayer = 1;
var betsPlaced = [];
var playerTurn = document.getElementById('player');
var card = document.getElementById('card');
var bet1 = document.getElementsByClassName('bet1')[0];
var player1Box = document.getElementsByClassName('player1Box')[0];
var dealerCardBox = document.getElementsByClassName('dealerCardBox')[0];
var dealerCards;
var dealerArray = [];
var playerArray = [];
var cardCount = 0;
var beginGame = true;
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
    cardImage: "images/4S.png",
  },
  {
    rank: 5,
    suit: "spades",
    cardImage: "images/5S.png",
  },
  {
    rank: 6,
    suit: "spades",
    cardImage: "images/6S.png",
  },
  {
    rank: 7,
    suit: "spades",
    cardImage: "images/7S.png",
  },
  {
    rank: 8,
    suit: "spades",
    cardImage: "images/8S.png",
  },
  {
    rank: 9,
    suit: "spades",
    cardImage: "images/9S.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/10S.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/JS.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/QS.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/KS.png",
  },
];

//place chips on table
document.getElementById('bet').addEventListener('click', function() {
  playerBet = document.getElementById('amount').value;
  if (player1 === true) {
    document.getElementsByClassName('bet1')[0].textContent = playerBet;
  }
});

// This function draws a random card for anyone
var drawCard = function() {
    return cardsArray[Math.floor(Math.random() * 52)];
}

//deal randomly give cards to player/dealer from a deck
function deal() {
  if(bet1.textContent !== '' && bet1.textContent >= 5) {
    if(beginGame === true) {
      var card = drawCard();
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.setAttribute('class', 'image');
      player1Box.appendChild(cardElement);
      playerArray.push(card.rank);
      card = drawCard();
      cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.setAttribute('class', 'image');
      dealerCardBox.appendChild(cardElement);
      dealerArray.push(card.rank);
      card = drawCard();
      cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.setAttribute('class', 'image');
      player1Box.appendChild(cardElement);
      playerArray.push(card.rank);
      card = drawCard();
      cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.setAttribute('class', 'image');
      dealerCardBox.appendChild(cardElement);
      dealerArray.push(card.rank);
      var cardBack = document.createElement('img');
      cardBack.setAttribute('src', 'images/red_back.png');
      cardBack.setAttribute('class', 'cardBack');
      dealerCardBox.appendChild(cardBack);
      beginGame = false;
    }
    document.getElementById('hit').addEventListener('click', function (){
        var card = drawCard();
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.setAttribute('class', 'image');
        playerArray.push(card.rank);
        player1Box.appendChild(cardElement);
        console.log(playerArray);
    });
  }
}
document.getElementById('deal').addEventListener("click", deal);

// hit function
function hit() {
  deal();
}

//stand     stop current player turn and go to next
document.getElementById('stand').addEventListener('click', function() {
  document.getElementById('hit').disabled = true;
  while (dealerArray.reduce(function(acc, curVal) {return acc + curVal}) < 17) {
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    dealerCardBox.appendChild(cardElement);
    dealerArray.push(card.rank);
  }
});

// Determine winner
function winner() {
  if(playerArray.reduce(function(acc, curVal) {return acc + curVal}) > dealerArray.reduce(function(acc, curVal) {return acc + curVal}) && playerArray.reduce(function(acc, curVal) {return acc + curVal}) < 22) {
    
  }
}
