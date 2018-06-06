// global variables
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
var player1Card1 = document.getElementsByClassName('player1Card1')[0];
var player1Card2 = document.getElementsByClassName('player1Card2')[0];
var player1Card3 = document.getElementsByClassName('player1Card3')[0];
var player1Card4 = document.getElementsByClassName('player1Card4')[0];
var player1Card5 = document.getElementsByClassName('player1Card5')[0];
var player1Card6 = document.getElementsByClassName('player1Card6')[0];
var player1Card7 = document.getElementsByClassName('player1Card7')[0];
var player1Card8 = document.getElementsByClassName('player1Card8')[0];
var player1Card9 = document.getElementsByClassName('player1Card9')[0];
var player1Card10 = document.getElementsByClassName('player1Card10')[0];
var dealerCard1 = document.getElementsByClassName('dealerCard1')[0];
var dealerCard2 = document.getElementsByClassName('dealerCard2')[0];
var dealerCard3 = document.getElementsByClassName('dealerCard3')[0];
var dealerCard4 = document.getElementsByClassName('dealerCard4')[0];
var dealerCard5 = document.getElementsByClassName('dealerCard5')[0];
var dealerCard6 = document.getElementsByClassName('dealerCard6')[0];
var dealerCard7 = document.getElementsByClassName('dealerCard7')[0];
var dealerCard8 = document.getElementsByClassName('dealerCard8')[0];
var dealerCard9 = document.getElementsByClassName('dealerCard9')[0];
var dealerCard10 = document.getElementsByClassName('dealerCard10')[0];
var dealerCards;
var dealerArray = [];
var playerArray = [];
var cardCount = 0;

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

//bet  place money on table
document.getElementById('bet').addEventListener('click', function() {
  playerBet = document.getElementById('amount').value;
  if (player1 === true) {
    document.getElementsByClassName('bet1')[0].textContent = playerBet;
  }
});


//hit / draw          draw a new card from a deck and add it to current hand value
// This function draws a random card for anyone
var drawCard = function() {
    return cardsArray[Math.floor(Math.random() * 52)];
}

//deal randomly give cards to player/dealer from a deck
function deal() {
  if(bet1.textContent !== '' && bet1.textContent >= 5) {
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    player1Card1.appendChild(cardElement);
    playerArray.push(card.rank);
    card = drawCard();
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    dealerCard1.appendChild(cardElement);
    dealerArray.push(card.rank);
    card = drawCard();
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    player1Card2.appendChild(cardElement);
    playerArray.push(card.rank);
    card = drawCard();
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    dealerCard2.appendChild(cardElement);
    dealerArray.push(card.rank);
    var cardBack = document.createElement('img');
    cardBack.setAttribute('src', 'images/red_back.png');
    cardBack.setAttribute('class', 'cardBack');
    dealerCard1.appendChild(cardBack);
  }
}
document.getElementById('deal').addEventListener("click", deal);

// hit button
// appending child to a new div each time hit button is clicked to stagger cards
function hit() {
  if(cardCount === 7) {
    player1Card10.appendChild(drawCard());
    cardCount++
  }
  if(cardCount === 6) {
    player1Card9.appendChild(drawCard());
    cardCount++
  }
  if(cardCount === 5) {
    player1Card8.appendChild(drawCard());
    cardCount++
  }
  if(cardCount === 4) {
    player1Card7.appendChild(drawCard());
    cardCount++
  }
  if(cardCount === 3) {
    player1Card6.appendChild(drawCard());
    cardCount++
  }
  if(cardCount === 2) {
    player1Card5.appendChild(drawCard());
    cardCount++
  }
  if(cardCount === 1){
    player1Card4.appendChild(drawCard());
    cardCount++;
  }
  if(cardCount === 0){
    player1Card3.appendChild(drawCard());
    cardCount++;
  }
}

// player hits function
document.getElementById('hit').addEventListener('click', hit);

//stand     stop current player turn and go to next
// function stand() {
//
// }

document.getElementById('stand').addEventListener('click', function() {
  document.getElementById('hit').disabled = true;
  if(dealerArray.value < 17) {
    // Draw a card
    // hit button
    // appending child to a new div each time hit button is clicked to stagger cards
    function hit() {
      var cardCount = 0;
      if(cardCount === 7) {
        dealerCard10.appendChild(drawCard());
        cardCount++
      }
      if(cardCount === 6) {
        dealerCard9.appendChild(drawCard());
        cardCount++
      }
      if(cardCount === 5) {
        dealerCard8.appendChild(drawCard());
        cardCount++
      }
      if(cardCount === 4) {
        dealerCard7.appendChild(drawCard());
        cardCount++
      }
      if(cardCount === 3) {
        dealerCard6.appendChild(drawCard());
        cardCount++
      }
      if(cardCount === 2) {
        dealerCard5.appendChild(drawCard());
        cardCount++
      }
      if(cardCount === 1){
        dealerCard4.appendChild(drawCard());
        cardCount++;
      }
      if(cardCount === 0){
        dealerCard3.appendChild(drawCard());
        cardCount++;
      }
    }
  } else {
    // Determine winner
  }
});

//winner    evaluation on who is closest to 21
function winner() {

}
