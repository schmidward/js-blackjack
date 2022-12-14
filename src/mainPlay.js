function playGame() {
    
    let deck = makeDeck();
    shuffle(deck);
    let gameOver = false;

    while (!gameOver) {
        
        
        let playerHand = [];
        let dealerHand = [];
                
        gameStart(deck, playerHand, dealerHand);

        let playerScore = scoreHand(playerHand);
        let dealerScore = scoreHand(dealerHand);
        
        displayPlayerHand(playerHand);
        displayDealerHand(dealerHand);

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
                    displayPlayerHand(playerHand);
                    console.log(playerHand);
                } else {
                    playerContinue = false;
                    dealerContinue = true;
                }
            }
        }
        
        if (dealerContinue) {
            displayDealerHand(dealerHand, true);
            while (dealerScore <= 16) {
                dealCard(deck, dealerHand);
                dealerScore = scoreHand(dealerHand);
                displayDealerHand(dealerHand, true);
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
        gameOver = true;
    }
    return;
}