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
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}


// function for selecting or flipping over a card
var flipCard = function() {
	var cardId = this.getAttribute('data-id'); //gets data-id attribute of card clicked to store in variable cardID
  console.log("User flipped " + cards[cardId].rank)  // displays rank of card flipped
  console.log(cards[cardId].suit); //shows suit of card flipped
  this.setAttribute('src', cards[cardId].cardImage); 
  cardsInPlay.push(cards[cardId].rank) 
  if (cardsInPlay.length === 2) {  // verify 2 cards in play
    checkForMatch();
  }
};

//adding function to create the board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {   // for loop in order to loop through the cards array
	var cardElement = document.createElement('img') ; //created imgh element to store in valiable cardElement
	cardElement.setAttribute("src", "images/back.png"); // sets img source to images folder
	cardElement.setAttribute('data-id', i); 
	cardElement.addEventListener('click', flipCard) // triggers flipCard function upon click
	document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard(); // this calls the createBoard function