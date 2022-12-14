function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--){
        let currentCard = deck[i];
        let randomIndex = Math.floor(Math.random() * (i + 1));
        deck[i] = deck[randomIndex];
        deck[randomIndex] = currentCard;
    }
}

function dealCard(deck, hand) {
    if (deck.length === 0) {
        deck = makeDeck();
        shuffle(deck);
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

function displayPlayerHand(hand) {
    const playerDisplay = document.getElementById('player-hand');

    playerDisplay.innerHTML = ``;

    for (let i = 0; i < hand.length; i++) {
       playerDisplay.innerHTML += `<img src="./card-assets/${hand[i].cardAbbr}.png" alt="${hand[i].value} of ${hand[i].suit}">`
    }
}

function displayDealerHand(hand, fistCardVisible = false) {
    const dealerDisplay = document.getElementById('dealer-hand');

    if (!fistCardVisible) {
        dealerDisplay.innerHTML = '<img src="./card-assets/card-back.png" alt="Card back">'
        
        for (let i = 1; i < hand.length; i++) {
            dealerDisplay.innerHTML += `<img src="./card-assets/${hand[i].cardAbbr}.png" alt="${hand[i].value} of ${hand[i].suit}">`
        }
    } else {
        for (let i = 0; i < hand.length; i++) {
            dealerDisplay.innerHTML += `<img src="./card-assets/${hand[i].cardAbbr}.png" alt="${hand[i].value} of ${hand[i].suit}">`
        }
    }

}