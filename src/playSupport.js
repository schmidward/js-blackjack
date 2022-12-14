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

//function to deal first four cards
function gameStart(deck, playerHand, dealerHand) {
    dealCard(deck, playerHand);
    dealCard(deck, dealerHand);
    dealCard(deck, playerHand);
    dealCard(deck, dealerHand);
}


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
		total += aces[i].points(total);
	}
	return total;
}

//TODO: Write display functions to be called during playGame()

let playerHand = [];
let dealerHand = [];
let deck = getDeck();
shuffleDeck(deck);

gameStart(deck, playerHand, dealerHand);

function displayPlayerHand(hand) {
    //const playerDisplay = document.getElementById('player-hand');

    let displayDummy = []

    for (let i = 0; i < hand.length; i++) {
        displayDummy.push(`<img src="./card-assets/${hand[i].cardAbbr}.png" alt="${hand[i].value} of ${hand[i].suit}">`)
    }
    console.log(displayDummy);
}

displayPlayerHand(playerHand);

module.exports = {
    shuffle: shuffleDeck,
    dealCard: dealCard,
    dealFour: gameStart,
    scoreHand: scoreHand,
}