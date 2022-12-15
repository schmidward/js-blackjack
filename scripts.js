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
    
    let deck = makeDeck();
    let firstCheck = '';
    let playerHand = [];
    let dealerHand = [];
    let dealerScore = 0;
    let playerScore = 0;

    nameInput.addEventListener('input', function() {
        playerName.innerHTML = `${nameInput.value}'s hand`;
    });

    //One event listener to update the name and what not
    saveName.addEventListener('click', function() {
        if (!nameInput.value) {
            nameInput.value = 'Player';
        }
        playerName.innerHTML = `${nameInput.value}'s hand`;
        nameInputContainer.style.visibility = 'hidden';
        startGame.style.visibility = 'visible';
    });

    //One to run the program
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
        firstCheck = playGame(deck, playerHand, dealerHand, playerScore, dealerScore);
        if (firstCheck) {
            gameMessages.innerHTML = `Game result: ${firstCheck}`;
            finalMessage(leftButton, rightButton, playAgain);
        }

        leftButton.onclick = function() {
            playerScore = hit(deck, playerHand, playerScore);
            let result = secondCheck(playerScore);
            if (result) {
                gameMessages.innerHTML = `Game result: ${result}`;
                finalMessage(leftButton, rightButton, playAgain);
            }
            // return playerScore;
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

