
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
// need if statement for checking if two cards selected
	//Do something if true;
var checkForMatch = function (){
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else  {
	alert("Sorry, try again.");
};
};
var flipCard = function (cardId){	
	console.log("User flipped" + " " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[0].rank);
	cardsInPlay.push(cards[2].rank);
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('cards', "images/back.png");
	cardElement.setAttribute('data-id', i);
	}
} 
checkForMatch();
};
flipCard(1);
flipCard(2);

