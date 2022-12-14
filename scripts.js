//TODO: JavaScripting to include event listeners for the buttons and propertly update them according to what the game is doing
window.addEventListener("load", function() {

    const leftButton = document.getElementById('buttonA');
    const rightButton = document.getElementById('buttonB');
    const buttonContainer = document.getElementById('user-buttons');
    const nameInput = document.getElementById('userNameInput');
    const startGame = document.getElementById('startGame');
    const playerName = document.getElementById('playerName');
    const nameInputContainer = document.getElementById('name-input');
    const gameMessages = document.getElementById('game-messages');

    let activeGame = false;

    leftButton.innerHTML = "Hit";
    rightButton.innerHTML = "Stay";

    nameInput.addEventListener('input', function() {
        playerName.innerHTML = `${nameInput.value}'s hand`;
    });

    //One event listener to update the name and what not
    startGame.addEventListener('click', function() {
        playerName.innerHTML = `${nameInput.value}'s hand`;
        nameInputContainer.style.visibility = 'hidden';
        buttonContainer.style.visibility = 'visible';
    });

    //One to run the program
    startGame.addEventListener('click', function() {
        
    })

    leftButton.addEventListener('click', function() {
        console.log("I clicked the left button.")
        activeGame = true;
        console.log(activeGame);
    });

    rightButton.addEventListener('click', function() {

    });
 





})

