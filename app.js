console.log("I'm alive!");

//computer moves through each key value pair to represent the progression of levels. Note selections are hard coded in
const levels = {
    levelOne: ['70', '74', '75'],
    levelTwo: ['68', '83', '65'],
    levelThree: ['75', '76', '75'],
    levelFour: ['65', '68', '75', '76'],
    levelFive: ['65', '83', '68', '83', '65']
}

//the notes the player click on get pushed to this array each level and compared with the level array
const playerChoice = [];

const hideModal = (event) => {
    event = $('#startModal').css('display', 'none');
    setUpGame();
}

//if the player chooses to play, then the computer's function is invoked to start playing random notes to match
const setUpGame = () => {
    // prompt("Mozart has challenged you to a piano playoff! Do you accept?", "yes/no");
    // if (prompt === 'yes') {
    //     mozartTurn()
    // } else if (prompt === 'no') {
    //     alert("Better luck next time! Come and play again!");
    // }
}

const mozartTurn = () => {
    //display speech bubble that says the alert message
    alert("here we go!");
    //pass in levels.levelOne[i];
    //plays notes for the user to match
}

const playerTurn = () => {
    //player matches the notes given by the computer
    //if the notes match, move on to next level, level counter is incremented
    //if the notes do not match alert game over and give option to play again
    //each note the player clicks will get pushed into an array that can be matched to each level
    //example: 
    // $('.whiteKey').click(playerChoice.push(//classname))
    if (playerChoice === levels.levelOne) {
        levelCount++;
        playerChoice.empty();
        mozartTurn();
    }
}

//gives the player the option of starting over at any time
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