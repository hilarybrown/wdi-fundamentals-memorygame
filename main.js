console.log("Up and running!")

//card faces and suits
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

// function for selecting or flipping over a card
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank)  // displays rank of card flipped
  console.log("User flipped " + cards[cardId].cardImage) //displays image of card flipped
  console.log("User flipped " + cards[cardId].suit) //displays suit of card flipped

  cardsInPlay.push(cards[cardId].rank) 

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