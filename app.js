// global variables
let dealer;
let player1 = true;
let playerBet;
let bet = false;
let playerTurn = document.getElementById('player');
let card = document.getElementById('card');
let bet1 = document.getElementById('bet1');
let betAmount = document.getElementById('betAmount');
let yourMoney = document.getElementById('yourMoney');
let doubleDownButton = document.getElementById('double-down');
let splitButton = document.getElementById('split-button');
let splitHitButton = document.getElementById('splitHitButton');
let splitDoubleDownButton = document.getElementById('splitDoubleDownButton');
let splitSplitButton = document.getElementById('splitSplitButton');
let splitStandButton = document.getElementById('splitStandButton');
let dealAudio = document.getElementById('deal-audio');
let shuffleAudio = document.getElementById('shuffle-audio');
let coinsAudio = document.getElementById('coins-audio');
let winAudio = document.getElementById('win-audio');
let tieAudio = document.getElementById('tie-audio');
let loseAudio = document.getElementById('lose-audio');
let standButton = document.getElementById('stand');
let hitButton = document.getElementById('hit');
let cardBack = document.getElementsByClassName('cardBack')[0]
let player1Box = document.getElementsByClassName('player1Box')[0];
let dealerCardBox = document.getElementsByClassName('dealerCardBox')[0];
let tieGame = document.getElementsByClassName('nobodyWins')[0];
let dealerWins = document.getElementsByClassName('dealerWins')[0];
let youWin = document.getElementsByClassName('youWin')[0];
let extraBet = document.getElementsByClassName('extra-bet')[0];
let extraPlayerBox = document.getElementsByClassName('extraPlayerBox')[0];
let amountOfMoney = document.getElementsByClassName('amountOfMoney')[0];
let buttonsSecondSet = document.getElementsByClassName('buttonsSecondSet')[0];
let redLight = document.getElementsByClassName('redLight')[0];
let image = document.getElementsByClassName('image');
let playerSide = document.getElementsByClassName('playerSide')[0];
let splitButtonsContainer = document.getElementsByClassName('splitButtonsContainer')[0];
let dealerArray = [];
let playerArray = [];
let secondPlayerArray = [];
let newPlayerArray = [];
let beginGame = true;
let p1Total = checkForAce(playerArray);
let newP1Total = checkForAce(newPlayerArray);
let secondP1Total = checkForAce(secondPlayerArray);
let dealTotal = checkForAce(dealerArray);
let splitBox = player1Box.cloneNode(false);
let playerBoxArray = [player1Box];
let cardsArray = [
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

// This function allows you to make a bet
const placeBet = () => {
  coinsAudio.play();
  let bet1 = document.getElementById('bet1');
  if (betAmount.value > parseInt(amountOfMoney.innerHTML)) {
    alert("You don't have enough money");
} else if (betAmount.value >= 5) {
    amountOfMoney.innerHTML -= betAmount.value;
    amountOfMoney.style.display = 'inline-block';
    document.getElementById('bet').disabled = true;
    document.getElementById('deal').disabled = false;
  }
};

// This function draws a random card for anyone
var drawCard = function() {
    return cardsArray[Math.floor(Math.random() * 51)];
}

//deal randomly give cards to player/dealer from a deck
function deal() {
    if(beginGame === true) {
        dealAudio.play();
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
      document.getElementById('double-down').disabled = false;
      document.getElementById('split-button').disabled = false;
      beginGame = false;
      if(!splitBox.hasChildNodes()) {
        p1Total = checkForAce(playerArray);
      } else {
        newP1Total = checkForAce(newPlayerArray);
      }
      dealTotal = checkForAce(dealerArray);
      blackJack();
  }

// function to double your money before 
let doubleDown = () => {
  dealAudio.play();
  if(parseInt(betAmount.value) <= parseInt(amountOfMoney.innerHTML)) {
    amountOfMoney.innerHTML = parseInt(amountOfMoney.innerHTML) - parseInt(betAmount.value);
    betAmount.value *= 2;
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.className = 'image';
    player1Box.appendChild(cardElement).style.transform = 'rotate(90deg) translateX(50px) translateY(-45px)';
    playerArray.push(card.rank);
    card = drawCard();
    stand();
  } else {
    alert("you don't have enough money")
  }
}

// split double down button

let splitDoubleDown = () => {
  dealAudio.play();
  if(parseInt(betAmount.value) <= parseInt(amountOfMoney.innerHTML)) {
    amountOfMoney.innerHTML = parseInt(amountOfMoney.innerHTML) - parseInt(betAmount.value);
    betAmount.value *= 2;
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.className = 'image';
    splitBox.appendChild(cardElement).style.transform = 'rotate(90deg) translateX(50px) translateY(-45px)';
    secondPlayerArray.push(card.rank);
    card = drawCard();
    stand();
  } else {
    alert("you don't have enough money")
  }
}

// This function is when you're delt a card without hitting
var autoDraw = () => {
  let card = drawCard();
  let cardElement = document.createElement('img');
  cardElement.setAttribute('src', card.cardImage);
  cardElement.className = 'image';
  player1Box.appendChild(cardElement).setAttribute('style', 'top: 12px; left: 12px;');
  playerArray.push(card.rank);
  card = drawCard();
}

// This function allows you to split your initial hand before you hit
const split = () => {
  if (playerArray[0] === playerArray[1]) {
    if ((betAmount.value * 2) > amountOfMoney.innerHTML) {
      alert('You do not have enough money to split');
    } else {
      dealAudio.play();
      document.getElementById('hit').disabled = false;
      document.getElementById('deal').disabled = true;
      document.getElementById('split-button').disabled = true;
      document.getElementById('double-down').disabled = true;
      amountOfMoney.innerHTML = parseInt(amountOfMoney.innerHTML) - parseInt(betAmount.value);
      betAmount.value *= 2;
      extraPlayerBox.appendChild(splitBox).style.transform = 'translateX(100px)';
      splitBox.appendChild(player1Box.childNodes[1]).setAttribute('style', 'top: 0; left: 0');
      player1Box.childNodes.clean = function(deleteValue) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == deleteValue) {         
            this.splice(i, 1);
            i--;
          }
        }
        return this;
      };
      autoDraw();
      let card = drawCard();
      let cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.className = 'image';
      splitBox.appendChild(cardElement).setAttribute('style', 'top: 12px; left: 12px;');
      playerArray.push(card.rank);
      card = drawCard();
      secondPlayerArray = [];
      for (let i=0;i<playerArray.length;i++){
          if ((i+2)%2==0) {
              newPlayerArray.push(playerArray[i]);
          }
          else {
            secondPlayerArray.push(playerArray[i]);
          }
      }
      extraPlayerBox.insertBefore(splitButtonsContainer, splitBox).setAttribute('style', 'display: block; transform: translateX(2em);');
      playerBoxArray.push(splitBox);
      console.log(betAmount.value)
      console.log(amountOfMoney.innerHTML)
    }
  }
}

// function to remove card back
function removeCardBack() {
 var elem = document.getElementsByClassName('cardBack')[0];
 dealerCardBox.removeChild(elem);
}

const hitSplitHand = () => {
  if(splitBox.childNodes.length === 2) {
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    cardElement.style.top = (splitBox.children.length * 12).toString() + "px";
    cardElement.style.left = (splitBox.children.length * 18).toString() + "px";
    splitBox.appendChild(cardElement);
    secondPlayerArray.push(card.rank);
  } else {
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    cardElement.style.top = (splitBox.children.length * 12).toString() + "px";
    cardElement.style.left = (splitBox.children.length * 18).toString() + "px";
    splitBox.appendChild(cardElement);
    secondPlayerArray.push(card.rank);
    p1Total = checkForAce(secondPlayerArray);
    dealTotal = checkForAce(dealerArray);
    winner(p1Total, dealTotal);
  }
}

function stand() {
    if (playerBoxArray.length === 1) {
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
    } else {
        standButton.disabled = true;
        hitButton.disabled = true;
        splitHitButton.disabled = false;
        splitDoubleDownButton.disabled = false;
        splitStandButton.disabled = false;
    }
}

// function for split stand button

let splitStand = () => {
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
  p1Total = checkForAce(newPlayerArray);
  dealTotal = checkForAce(dealerArray);
  winner(p1Total, dealTotal);
  p1Total = checkForAce(secondPlayerArray);
  dealTotal = checkForAce(dealerArray);
  winner(p1Total, dealTotal);
}

function blackJack() {
  if(p1Total === 21 && dealTotal !== 21) {
    document.getElementsByClassName('youWin')[0].style.display = 'block';
    amountOfMoney.innerHTML = parseInt(amountOfMoney.innerHTML) + parseInt(betAmount.value * 2);
    winAudio.play();
    disableButtons();
  } else if(dealTotal === 21 && p1Total !== 21) {
    document.getElementsByClassName('dealerWins')[0].style.display = 'block';
    // remove the card back
    document.getElementsByClassName('cardBack')[0].remove();
    loseAudio.play();
    disableButtons();
  } else if(dealTotal === 21 && p1Total === 21) {
    // remove the card back
    document.getElementsByClassName('cardBack')[0].remove();
    document.getElementsByClassName('nobodyWins')[0].style.display = 'block';
    tieAudio.play();
    disableButtons();
  } else {
  }
}

function bust() {
  if (p1Total > 21) {
    document.getElementsByClassName('dealerWins')[0].style.display = 'block';
    let moneyPerHand = parseInt(betAmount.value) / parseInt(playerBoxArray.length);
    betAmount.value = parseInt(moneyPerHand) * parseInt(playerBoxArray.length - 1);
    playerBoxArray.shift();
    if (playerBoxArray.length === 0) {
      disableButtons();
    }
  loseAudio.play();
  }
}

var clearBet = () => {
  bet1.innerHTML = "";
}

// Determine winner
function winner(p1, deal) {
  if((p1 > deal && p1 < 22) || (deal > 21 && p1 < 22)) {
      // player wins
      document.getElementsByClassName('youWin')[0].style.display = 'block';
      amountOfMoney.innerHTML = parseInt(amountOfMoney.innerHTML) + parseInt(betAmount.value * 2);
      winAudio.play();
      disableButtons();
  } else if ((p1 < deal && deal < 22) || (p1 > 21 && deal < 22) || p1 > 21) {
      // dealer wins.
      document.getElementsByClassName('dealerWins')[0].style.display = 'block';
      loseAudio.play();
      disableButtons();
  } else {
    // push. nobody wins.
    document.getElementsByClassName('nobodyWins')[0].style.display = 'block';
    amountOfMoney.innerHTML = parseInt(amountOfMoney.innerHTML) + parseInt(betAmount.value);
    tieAudio.play();
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
  shuffleAudio.play();
  document.getElementById('bet').disabled = false;
  document.getElementById('deal').disabled = false;
  document.getElementById('stand').disabled = true;
  document.getElementById('deal').disabled = true;
  document.getElementById('double-down').disabled = true;
  document.getElementById('split-button').disabled = true;
  splitHitButton.disabled = true;
  splitDoubleDownButton.disabled = true;
  splitStandButton.disabled = true;
  playerArray = [];
  dealerArray = [];
  while (dealerCardBox.hasChildNodes()) {
    dealerCardBox.removeChild(dealerCardBox.lastChild);
  }
  while (player1Box.hasChildNodes()) {
    player1Box.removeChild(player1Box.lastChild);
  }
  [].forEach.call(document.querySelectorAll('.image'),function(e){
    e.parentNode.removeChild(e);
  });
  document.getElementsByClassName('nobodyWins')[0].style.display = 'none';
  document.getElementsByClassName('youWin')[0].style.display = 'none';
  document.getElementsByClassName('dealerWins')[0].style.display = 'none';
  clearBet();
  playerBoxArray = [player1Box];
  beginGame = true;
}

var hit = () => {
  dealAudio.play();
  if (splitBox.hasChildNodes()) {
      splitButton.disabled = true;
      doubleDownButton.disabled = true;
      var card = drawCard();
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.className = 'image';
      cardElement.style.top = (player1Box.children.length * 12).toString() + "px";
      cardElement.style.left = (player1Box.children.length * 12).toString() + "px";
      player1Box.appendChild(cardElement);
      newPlayerArray.push(card.rank);
      p1Total = checkForAce(newPlayerArray);
      dealTotal = checkForAce(dealerArray);
      bust();
  } else {
    splitButton.disabled = true;
    doubleDownButton.disabled = true;
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.className = 'image';
    cardElement.style.top = (player1Box.children.length * 12).toString() + "px";
    cardElement.style.left = (player1Box.children.length * 12).toString() + "px";
    player1Box.appendChild(cardElement);
    playerArray.push(card.rank);
    p1Total = checkForAce(playerArray);
    dealTotal = checkForAce(dealerArray);
    bust();
  }
}

const splitHit = () => {
  if (dealerWins.style.display === 'block') {
    dealerWins.style.display = 'none';
  } else if (youWin.style.display === 'block') {
    youWin.style.display = 'none';
  } else if (tieGame.style.display === 'block') {
    tieGame.style.display = 'none';
  }
  var card = drawCard();
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', card.cardImage);
  cardElement.className = 'image';
  cardElement.style.top = (splitBox.children.length * 12).toString() + "px";
  cardElement.style.left = (splitBox.children.length * 18).toString() + "px";
  splitBox.appendChild(cardElement);
  secondPlayerArray.push(card.rank);
  p1Total = checkForAce(secondPlayerArray);
  dealTotal = checkForAce(dealerArray);
  bust();
  if(p1Total > 21) {
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
    if (playerBoxArray.length === 2) {
      p1Total = checkForAce(playerArray);
      dealTotal = checkForAce(dealerArray);
      winner(p1Total, dealTotal);
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('hit').disabled = true;
  document.getElementById('stand').disabled = true;
  document.getElementById('deal').disabled = true;
  document.getElementById('double-down').disabled = true;
  document.getElementById('split-button').disabled = true;
  document.getElementById('deal').disabled = true;
  splitHitButton.disabled = true;
  splitDoubleDownButton.disabled = true;
  splitStandButton.disabled = true;
  document.getElementById('deal').addEventListener("click", deal);
  document.getElementById('stand').addEventListener('click', stand);
  document.getElementById('replay').addEventListener('click', replay);
  document.getElementById('double-down').addEventListener('click', doubleDown);
  splitButton.addEventListener('click', split);
  splitHitButton.addEventListener('click', splitHit);
  splitDoubleDownButton.addEventListener('click', splitDoubleDown);
  splitStandButton.addEventListener('click', splitStand);
  document.getElementById('hit').addEventListener('click', hit);
  document.getElementById('bet').addEventListener('click', placeBet);
});