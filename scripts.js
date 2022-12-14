//TODO: JavaScripting to include event listeners for the buttons and propertly update them according to what the game is doing
window.addEventListener("load", function() {

    const leftButton = document.getElementById('buttonA');
    const rightButton = document.getElementById('buttonB');
    const buttonContainer = document.getElementById('user-buttons');
    const nameInput = document.getElementById('userNameInput');
    const saveButton = document.getElementById('saveName');
    const playerName = document.getElementById('playerName');
    const nameInputContainer = document.getElementById('name-input');
    const gameMessages = document.getElementById('game-messages');

    leftButton.innerHTML = "Yes";
    rightButton.innerHTML = "No";

    nameInput.addEventListener('input', function() {
        playerName.innerHTML = `${nameInput.value}'s hand`;
    });

    saveButton.addEventListener('click', function(event) {
        playerName.innerHTML = `${nameInput.value}'s hand`;
        nameInputContainer.style.visibility = 'hidden';
        buttonContainer.style.visibility = 'visible';
    });

    leftButton.addEventListener('click', function() {

    });

    rightButton.addEventListener('click', function() {

    });



})

