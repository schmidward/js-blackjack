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

    leftButton.innerHTML = "Hit";
    rightButton.innerHTML = "Stay";

    



    nameInput.addEventListener('input', function() {
        playerName.innerHTML = `${nameInput.value}'s hand`;
    });

    //One event listener to update the name and what not
    saveName.addEventListener('click', function() {
        playerName.innerHTML = `${nameInput.value}'s hand`;
        nameInputContainer.style.visibility = 'hidden';
        startGame.style.visibility = 'visible';
    });

    //One to run the program
    startGame.addEventListener('click', function() {
        leftButton.style.visibility = 'visible';
        rightButton.style.visibility = 'visible';
        startGame.style.visibility = 'hidden';
        let deck = makeDeck();
        playGame(deck, playerHand, dealerHand);
        leftButton.addEventListener('click', function() {
            hit(deck);
        });
        rightButton.addEventListener('click', function() {
            console.log('I clicked this button');
            stay(deck);
        });
    });
    








})

