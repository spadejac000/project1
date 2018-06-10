// global variables
var dealer;
var player1 = true;
var playerBet;
var bet = false;
var playerTurn = document.getElementById('player');
var card = document.getElementById('card');
var bet1 = document.getElementsByClassName('bet1')[0];
var player1Box = document.getElementsByClassName('player1Box')[0];
var dealerCardBox = document.getElementsByClassName('dealerCardBox')[0];
var dealerCards;
var dealerArray = [];
var playerArray = [];
var beginGame = true;
var p1Total = checkForAce(playerArray);
var dealTotal = checkForAce(dealerArray);
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

// This function draws a random card for anyone
var drawCard = function() {
    return cardsArray[Math.floor(Math.random() * 51)];
}

//deal randomly give cards to player/dealer from a deck
function deal() {
    if(beginGame === true) {
        var card = drawCard();
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        player1Box.appendChild(cardElement);
        playerArray.push(card.rank);
        card = drawCard();
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        dealerCardBox.appendChild(cardElement);
        dealerArray.push(card.rank);
        card = drawCard();
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        cardElement.style.top = "12px";
        cardElement.style.left = "12px";
        player1Box.appendChild(cardElement);
        playerArray.push(card.rank);
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/red_back.png');
        cardElement.className = 'cardBack';
        cardElement.style.top = "12px";
        cardElement.style.left = "12px";
        dealerCardBox.appendChild(cardElement);
        card = drawCard();
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        cardElement.style.top = "12px";
        cardElement.style.left = "12px";
        dealerCardBox.appendChild(cardElement);
        dealerArray.push(card.rank);
      }
      document.getElementById('hit').disabled = false;
      document.getElementById('stand').disabled = false;
      beginGame = false;
      p1Total = checkForAce(playerArray);
      dealTotal = checkForAce(dealerArray);
      blackJack();
  }

// function to remove card back
function removeCardBack() {
 var elem = document.getElementsByClassName('cardBack')[0];
 dealerCardBox.removeChild(elem);
}

function stand() {
  //stand     stop current player turn and go to next
    document.getElementById('hit').disabled = true;
    removeCardBack();
    while (dealerArray.reduce(function(acc, curVal) {return acc + curVal}) < 17) {
      var card = drawCard();
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.setAttribute('class', 'image');
      cardElement.style.top = (dealerCardBox.children.length * 12).toString() + "px";
      cardElement.style.left = (dealerCardBox.children.length * 12).toString() + "px";
      dealerCardBox.appendChild(cardElement);
      dealerArray.push(card.rank);
    }
    p1Total = checkForAce(playerArray);
    dealTotal = checkForAce(dealerArray);
    winner(p1Total, dealTotal);
}

function blackJack() {
  if(p1Total === 21 && dealTotal !== 21) {
    document.getElementsByClassName('youWin')[0].style.display = 'block';
    disableButtons();
  } else if(dealTotal === 21 && p1Total !== 21) {
    document.getElementsByClassName('dealerWins')[0].style.display = 'block';
    // remove the card back
    document.getElementsByClassName('cardBack')[0].remove();
    disableButtons();
  } else if(dealTotal === 21 && p1Total === 21) {
    // remove the card back
    document.getElementsByClassName('cardBack')[0].remove();
    document.getElementsByClassName('nobodyWins')[0].style.display = 'block';
    disableButtons();
  } else {
  }
}

function bust() {
  if (p1Total > 21) {
    document.getElementsByClassName('dealerWins')[0].style.display = 'block';
    disableButtons();
  }
}

// Determine winner
function winner(p1, deal) {
  if((p1 > deal && p1 < 22) || (deal > 21 && p1 < 22)) {
      // player wins
      document.getElementsByClassName('youWin')[0].style.display = 'block';
      disableButtons();
  } else if ((p1 < deal && deal < 22) || (p1 > 21 && deal < 22) || p1 > 21) {
      // dealer wins.
      document.getElementsByClassName('dealerWins')[0].style.display = 'block';
      disableButtons();
  } else {
    // push. nobody wins.
    document.getElementsByClassName('nobodyWins')[0].style.display = 'block';
    disableButtons();
  }
}

function checkForAce(arr) {
  var numOfAces = 0;
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 1) {
      numOfAces++;
    } else {
        total = total + arr[i];
    }
  }
  for(var i = 0; i < numOfAces; i++) {
   if((total + 11) > 21) {
     total = total + 1;
     numOfAces--;
   } else {
      total = total + 11;
   }
  }
  return total;
}

// This function disables all buttons except replay when youWin, dealerWins, or nobodyWins pops up
function disableButtons() {
  document.getElementById('deal').disabled = true;
  document.getElementById('hit').disabled = true;
  document.getElementById('stand').disabled = true;
}

// This function clears the table
function replay() {
  document.getElementById('deal').disabled = false;
  document.getElementById('hit').disabled = true;
  document.getElementById('stand').disabled = true;
  playerArray = [];
  dealerArray = [];
  while (dealerCardBox.hasChildNodes()) {
    dealerCardBox.removeChild(dealerCardBox.lastChild);
  }
  while (player1Box.hasChildNodes()) {
    player1Box.removeChild(player1Box.lastChild);
  }
  document.getElementsByClassName('nobodyWins')[0].style.display = 'none';
  document.getElementsByClassName('youWin')[0].style.display = 'none';
  document.getElementsByClassName('dealerWins')[0].style.display = 'none';
  bet1.textContent = '';
  beginGame = true;
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('deal').addEventListener("click", deal);
  document.getElementById('stand').addEventListener('click', stand);
  document.getElementById('replay').addEventListener('click', replay);
  document.getElementById('hit').addEventListener('click', function (){
      var card = drawCard();
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.className = 'image';
      cardElement.style.top = (player1Box.children.length * 12).toString() + "px";
      cardElement.style.left = (player1Box.children.length * 12).toString() + "px";
      playerArray.push(card.rank);
      player1Box.appendChild(cardElement);
      p1Total = checkForAce(playerArray);
      dealTotal = checkForAce(dealerArray);
      bust();
  });
});

// to do list
// create read me file
// disable hit and stand buttons before clicking deal button
