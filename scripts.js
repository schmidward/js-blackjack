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
        gameMessages.innerHTML = 'Choose if you want to Hit or Stay';
        let deck = makeDeck();
        let firstCheck = playGame(deck);
        if (firstCheck) {
            gameMessages.innerHTML = `Game result: ${firstCheck}`;
        }
        leftButton.addEventListener('click', function() {
            let result = hit(deck);
            if (result) {
                gameMessages.innerHTML = `Game result: ${result}`;
            }
        });
        rightButton.addEventListener('click', function() {
            let result = stay(deck);
            gameMessages.innerHTML = `Game result: ${result}`;
        });
    });
    
})

