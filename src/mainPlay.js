  function playGame() {
    // function getPromiseFromEvent(item, event) {
    //     return new Promise((resolve) => {
    //       const listener = () => {
    //         item.removeEventListener(event, listener);
    //         resolve();
    //       }
    //       item.addEventListener(event, listener);
    //     })
    //   }
      
    //   async function hit() {
    //     await getPromiseFromEvent(leftButton, 'click');
    //     console.log('I clicked the button on the left');
    //     dealCard(deck, playerHand);
    //     playerScore = scoreHand(playerHand);
    //     displayPlayerHand(playerHand);
    //   }
    //   hit();
    
    //   async function stay() {
    //     await getPromiseFromEvent(rightButton, 'click');
    //     console.log('I clicked the button on the right');
    //     hasStayed = true;
    //     playerContinue = false;
    //     dealerContinue = true;
    //   }
    //   stay();

      const leftButton = document.getElementById('buttonA');
      const rightButton = document.getElementById('buttonB');
      
      leftButton.innerHTML = "Hit";
      rightButton.innerHTML = "Stay";


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
                let hasStayed = false;
                    while (!hasStayed) {
                        
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