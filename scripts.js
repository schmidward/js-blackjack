//TODO: JavaScripting to include event listeners for the buttons and propertly update them according to what the game is doing
window.addEventListener("load", function() {
    const leftButton = document.getElementById('buttonA');
    const rightButton = document.getElementById('buttonB');
    const nameInput = document.getElementById('userNameInput');
    const saveName = document.getElementById('save-name');
    const playerName = document.getElementById('playerName');
    const nameInputContainer = document.getElementById('name-input');
    const startGame = document.getElementById('start-game');
    const gameMessages = document.getElementById('game-messages');
    const playAgain = document.getElementById('play-again');
    const dealerCards = document.getElementById('dealer-hand');
    const playerCards = document.getElementById('player-hand');
    const hideInstructions = document.getElementById('hide-instructions');
    const showInstructions = document.getElementById('show-instructions');
    const instructions = document.getElementById('instructions');
    const currentScore = document.getElementById('current-total');

    let deck = makeDeck();
    let firstCheck = '';
    let playerHand = [];
    let dealerHand = [];
    let dealerScore = 0;
    let playerScore = 0;

    nameInput.addEventListener('input', function() {
        playerName.innerHTML = `${nameInput.value}'s hand`;
    });

    hideInstructions.addEventListener('click', function() {
        instructions.innerHTML = '';
        hideInstructions.innerHTML = '';
        hideInstructions.style.visibility = 'hidden';
        showInstructions.style.visibility = 'visible';
    })

    showInstructions.addEventListener('click', function() {
        instructions.innerHTML = `<div id="inline"><span id="bolder">Rules and instructions</span></div>
        <p class="justify"><b>The objective</b> in Blackjack is for the player to <b>beat the dealer</b> with a hand that's as close to 21 points as possible <em>without going over</em>. The player or dealer busts if they go over 21 points.</p>
        <p class="justify">Each card in the hand is worth as many points as the number on it (e.g. 4♣ = 4 points). Face cards are each worth <b>10 points</b> and Aces are worth <b>11 points,</b> unless the <b>total of all other cards in the hand</b> is greater than 10. Then Aces are worth 1 point.</p>
        <p class="justify">How to play:</p>
        <ol>
            <li>When prompted, click "Start Game!" <b>below</b> the square with the cards in it</li>
            <li>The player (you) and the dealer will each be dealt two cards from a shuffled deck. The player's cards will both be face up, while one of the dealer's cards will be hidden.</li>
            <li>Decide if you'd like to "Hit" or "Stay" with the buttons below. Pressing "Hit" will add one card to your hand. Pressing "Stay" won't add any cards to your hand and play moves to the dealer. <em>Be careful, hit too many times and you may bust.</em></li>
            <li>The Dealer <b>must continue hitting</b> until they have more than <b>16 points</b> in their hand or they bust.</li>
            <li>The game is then scored and whomever has the higher score wins.</li>
            <li>Press the 'Play Again?' button to reset the playing space before pressing 'Start Game!' for a new round.</li>
        </ol>`
        hideInstructions.innerHTML = 'Hide these instructions';
        hideInstructions.style.visibility = 'visible';
        showInstructions.style.visibility = 'hidden';
    })

    saveName.addEventListener('click', function() {
        if (!nameInput.value) {
            nameInput.value = 'Player';
        }
        playerName.innerHTML = `${nameInput.value}'s hand`;
        nameInputContainer.style.visibility = 'hidden';
        startGame.style.visibility = 'visible';
    });

    startGame.addEventListener('click', function() {
        gameMessages.innerHTML = 'Choose if you want to Hit or Stay';
        leftButton.style.visibility = 'visible';
        rightButton.style.visibility = 'visible';
        startGame.style.visibility = 'hidden';
        playerHand = [];
        dealerHand = [];
        if (deck.length === 0) {
            deck = makeDeck();
        }
        if (firstCheck !== ''){
            firstCheck = '';            
        }
        playerScore = playGame(deck, playerHand, dealerHand, playerScore, dealerScore);
        firstCheck = checkPlayerScore(playerScore);

        if (firstCheck) {
            gameMessages.innerHTML = `Game result: ${firstCheck}`;
            finalMessage(leftButton, rightButton, playAgain);
        }
        
        leftButton.onclick = function() {
            playerScore = hit(deck, playerHand, playerScore);
            let result = checkPlayerScore(playerScore);
            if (result) {
                gameMessages.innerHTML = `Game result: ${result}`;
                finalMessage(leftButton, rightButton, playAgain);
            }
        }
        rightButton.onclick = function() {
            let result = stay(deck, dealerHand, dealerScore, playerScore);
            gameMessages.innerHTML = `Game result: ${result}`;
            finalMessage(leftButton, rightButton, playAgain);
        }
    });
    
    playAgain.addEventListener('click', function(){
        dealerCards.innerHTML = '<img src="./card-assets/card-back.png" alt="Card back"><img src="./card-assets/card-back.png" alt="Card back">';
        playerCards.innerHTML = '<img src="./card-assets/card-back.png" alt="Card back"><img src="./card-assets/card-back.png" alt="Card back">';
        playerScore = 0;
        dealerScore = 0;
        startGame.style.visibility = 'visible';
        playAgain.style.visibility = 'hidden';
    });
})

