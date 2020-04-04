console.log("I'm alive!");

const levels = {
    levelOne: ['70', '74', '75'],
    levelTwo: ['68', '83', '65'],
    levelThree: ['75', '76', '75'],
    levelFour: ['65', '68', '75', '76'],
    levelFive: ['65', '83', '68', '83', '65']
}

const playerChoice = [];

const gameLevel = 1;

const counter = 0;

const hideModal = (event) => {
    event = $('#startModal').css('display', 'none');
    mozartTurn()
}

const mozartTurn = () => {
    $('#mozartTurn').css('display', 'block');
    
}

const playerTurn = () => {
    // const playerChoice = 
    // if (playerChoice === levels.levelOne) {
    //     levelCount++;
    //     playerChoice.empty();
    // }
    gameLevel++;
    checkForWin();
}

const checkForWin = () => {
    if (gameLevel === 5) {
        $('endModal').css('display', 'block');
    } else {
        mozartTurn();
    }
}

const restartGame = (event) => {
    event = window.location.reload();
}

const playAgain = (event) => {
    event = window.location.reload();
}

//==============================//
//CREATING THE AUDIO
//==============================//

const playAudio = (event) => {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!sound) return;

    key.classList.add('playing')
    sound.currentTime = 0;
    sound.play();
}

window.addEventListener('keydown', playAudio);

$(() => {
    //HIDE THE MODAL AND START THE GAME
    $('#play').on('click', hideModal);

    //RESET EVENT
    $('#reset').on('click', restartGame);

    //PLAY AGAIN
    $('#playAgain').on('click', playAgain);

});

//maybe later I should add a free play section so players can just make noise on the piano to understand what they are hearing