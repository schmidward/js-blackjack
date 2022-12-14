const { shuffle, dealOne, dealFour, scoreHand } = require('./playSupport.js');
const { getDeck } = require('./cards.js');

function playGame() {
    
    let deck = getDeck();
    shuffle(deck);
    let gameOver = false;

    while (!gameOver) {
        let playerHand = [];
        let dealerHand = [];
    
        dealFour(deck, playerHand, dealerHand);

        let playerScore = scoreHand(playerHand);
        let dealerScore = scoreHand(dealerHand);
    
        let playerContinue = true;
        let dealerContinue = false;

        let gameResult = "";

        while (playerContinue) {
            if (playerScore === 21) {
                gameResult = 'Player Wins!';
                playerContinue = false;
            } else if (playerScore > 21) {
                gameResult = 'Player Busts';
                playerContinue = false;
            } else {
                let hitOrStay = "hit" //TODO: RESPONSE BASED ON BUTTONS ON PAGE HTML PAGE
            
                if (hitOrStay === "hit") {
                    dealCard(deck, playerHand);
                    playerScore = scoreHand(playerHand);
                } else {
                    playerContinue = false;
                    dealerContinue = true;
                }
            }
        }

        if (dealerContinue) {
            while (dealerScore <= 16) {
                dealCard(deck, dealerHand);
                dealerScore = scoreHand(dealerHand);
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
            gameOver = true;
        }
    }

}
