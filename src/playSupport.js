const { getDeck } = require('./cards.js');

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--){
        let currentCard = deck[i];
        let randomIndex = Math.floor(Math.random() * (i + 1));
        deck[i] = deck[randomIndex];
        deck[randomIndex] = currentCard;
    }
}

function dealCard(deck, hand) {
    if (deck.length === 0) {
        deck = getDeck()
        shuffleDeck(deck);
    }
    hand.push(deck.shift())
}

let playerHand = [];
let dealerHand = [];
let deck = [];

//function to deal first four cards
function gameStart(deck, playerHand, dealerHand) {
    dealCard(deck, playerHand);
    dealCard(deck, dealerHand);
    dealCard(deck, playerHand);
    dealCard(deck, dealerHand);
}

gameStart(deck, playerHand, dealerHand);
console.log(playerHand);

//function to score hands and account for the ace function in the first object
function scoreHand(hand) {
	let total = 0;
	let aces = [];
	for (let i = 0; i < hand.length; i++) {
		if (hand[i].value !== "A") {
			total += hand[i].points;
		} else {
			aces.push(hand[i]);
		}
	}
	for (let i = 0; i < aces.length; i++) {
		total += aces[i].total(total);
	}
	return total;
}

let score = scoreHand(playerHand);
console.log(score);