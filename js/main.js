console.log("Up and running!")

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// function for selecting or flipping over a card
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId])  // displays which card flipped

  cardsInPlay.push(cards[cardId]) 

  if (cardsInPlay.length === 2) {  // verify 2 cards in play
    checkForMatch();
  }
}

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

flipCard(0);
flipCard(2);