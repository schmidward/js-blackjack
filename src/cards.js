//File for card deck created using simple objects in JavaScript

//Aces are a function that retuns 11 if less than or equal to 10 and 1 if greater than 10
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

modele.exports = {
    getDeck: makeDeck,
}