const { shuffle, dealCard, dealFour, scoreHand } = require('./playSupport.js');
const { getDeck } = require('./cards.js');
const input = require('readline-sync');


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
        
        //TODO: CALL display functions which will render the proper cards
        console.log(dealerHand);
        console.log(playerHand);

        let playerContinue = true;
        let dealerContinue = false;

        let gameResult = "";

        while (playerContinue) {
            if (playerScore === 21) {
                gameResult = 'Player Wins!';
                playerContinue = false;
                gameOver = true;
            } else if (playerScore > 21) {
                gameResult = 'Player Busts';
                playerContinue = false;
                gameOver = true;
            } else {
                let hitOrStay = input.question('Hit or Stay? "H" = Hit, "S" = Stay')
                
                if (hitOrStay === "H") {
                    dealCard(deck, playerHand);
                    playerScore = scoreHand(playerHand);
                    //TODO: call display function
                    console.log(playerHand);
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
        }
        console.log(gameResult);
        let playAgain = input.question('Play again? Y or N');
            if (playAgain === "N") {
                gameOver = true;
            }
    }
    return;
}

playGame();