console.log("I'm alive!");

let mozartChoice = [];
let playerChoice = [];
let flash;
let turn;
let success;
let mozTurn;
let intervalId;
let gameLevel;
let noise = true;
let win;

const levelCounter = document.querySelector('#levelCounter');
const C = document.querySelector('#c');
const D = document.querySelector('#d');
const E = document.querySelector('#e');
const F = document.querySelector('#f');
const G = document.querySelector('#g');
const A = document.querySelector('#a');
const B = document.querySelector('#b');

const hideModal = (event) => {
    event = $('#startModal').css('display', 'none');
    gameSetUp()
    mozartTurn()
}

const gameSetUp = () => {
    win = false;
    order = [];
    playerChoice = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    gameLevel.innerHTML = 1;
    success = true;
    for (let i = 0; i < 5; i++) {
        mozartChoice.push(Math.floor(Math.random() * 8) + 1);
    }
    mozTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

const mozartTurn = () => {
    $('#mozartTurn').css('display', 'block');


    // playerTurn();
}

const playerTurn = () => {
    $('#playerTurn').css('display', 'block');
    window.addEventListener('keydown', playAudio);
    playerChoice.push(keyCode);
    if (playerChoice === levels) {

    }
    turnCounter.innerHTML = 
    checkForWin();
}

const check = () => {
    if (playerChoice[playerChoice.length - 1] !== mozChoice[playerChoice.length - 1]) {

    }

}

const windGame = () => {
}

const restartGame = (event) => {
    event = window.location.reload();
}

const playAgain = (event) => {
    event = window.location.reload();
}

const playAudio = (event) => {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!sound) return;

    key.classList.add('playing')
    sound.currentTime = 0;
    sound.play();
}

$(() => {
    //INITIAL GAME SET UP
    gameSetUp();

    //HIDE THE MODAL AND START THE GAME
    $('#play').on('click', hideModal);

    //RESET EVENT
    $('#reset').on('click', restartGame);

    //PLAY AGAIN
    $('#playAgain').on('click', playAgain);

});

//maybe later I should add a free play section so players can just make noise on the piano to understand what they are hearing