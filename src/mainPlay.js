let cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: function(total) {
        if (total <= 10) {
            return 11;
        } else {
            return 1;
        }
    }
};

let suits = {
    clubs: "C",
    spades: "S",
    hearts: "H",
    diamonds: "D",
};

//This function creates an individual card with a key:value for points and a key:value for the card abbriviation
//The abbriviation correspond to specific card pngs
function createCard(value, suit) {
    return {
        value: value,
        suit: suit,
        points: cardValues[value],
        cardAbbr: `${value}${suits[suit]}`
    };
}


function makeDeck() {
    let deck = [];
    let allValues = Object.keys(cardValues);
    let allSuits = Object.keys(suits);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 13; j++) {
            deck.push(createCard(allValues[j], allSuits[i]));
        }
    }
    return deck;
}

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
        dealerDisplay.innerHTML = '';
        for (let i = 0; i < hand.length; i++) {
            dealerDisplay.innerHTML += `<img src="./card-assets/${hand[i].cardAbbr}.png" alt="${hand[i].value} of ${hand[i].suit}">`
        }
    }

}

let playerHand = [];
let dealerHand = [];
let dealerScore = scoreHand(dealerHand);
let playerScore = scoreHand(playerHand);

let gameResult = "";

function playGame(deck) {

    shuffle(deck);
    
    gameStart(deck, playerHand, dealerHand);
    
    displayPlayerHand(playerHand);
    displayDealerHand(dealerHand);

    dealerScore = scoreHand(dealerHand);
    playerScore = scoreHand(playerHand);

    if (playerScore === 21) {
        gameResult = 'Player Wins!';
    }
    return gameResult;
}



function hit(deck) {
    dealCard(deck, playerHand);
    displayPlayerHand(playerHand);
    playerScore = scoreHand(playerHand);
    console.log(playerScore);
    if (playerScore === 21) {
        gameResult = 'Player Wins!';
    } else if (playerScore > 21) {
        gameResult = 'Player Busts';       
}
    return gameResult;
}

function stay(deck) {
    displayDealerHand(dealerHand, true);
        dealerScore = scoreHand(dealerHand);
            while (dealerScore <= 16) {
                dealCard(deck, dealerHand);
                dealerScore = scoreHand(dealerHand);
                displayDealerHand(dealerHand, true);
                console.log(dealerScore);
            }
            
            if (dealerScore > 21) {
                gameResult = 'Dealer Busts';
            } else if (dealerScore < playerScore) {
                gameResult = 'Player Beats';
            } else if (dealerScore === playerScore) {
                gameResult = 'Tie';
            } else {
                gameResult = 'Dealer Beats';
            }
    return gameResult;
}




