//File for card deck created using simple objects in JavaScript

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

function createCard(value, suit) {
    return {
        value: value,
        points: cardValues[value],
        cardAbbr: `${value}${suits[suit]}`
    };
}
console.log(createCard("J", "clubs"));
console.log(Object.keys(cardValues));



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
console.log(makeDeck());