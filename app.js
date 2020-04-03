console.log("I'm alive!");

//computer moves through each key value pair to represent the progression of levels. Note selections are hard coded in
//if the playerTurn === to the current level selection, then they player can move on or increment the counter
const levels = {
    levelOne: ['keycode', '#g', '#a'],
    levelTwo: ['#e', '#d', '#c'],
    levelThree: ['#g', '#b', '#a'],
    levelFour: ['#c', '#e', '#g', '#b'],
    levelFive: ['#c', '#d', '#e', '#d', '#c']
}

//the notes the player click on get pushed to this array each level and compared with the level array
const playerChoice = [];

//gives the player instructions for how to play the game
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
    const $button = $(event.currentTarget);
    window.location.reload();
}

//==============================//
//CREATING THE AUDIO
//==============================//

const playAudio = (event) => {
    const sound = $(event.currentTarget);
    sound.play();
}

$(() => {
    //FUNCTION TO SET UP GAME
    setUpGame();

    //RESET EVENT
    $('#reset').on('click', restartGame);

    //AUDIO EVENTS
    // $('#cKey').on('click', ()=>{
    //     $('#c').play();
    // })
    $('#cKey').on('click', '#c', playAudioC);
    // $('#dKey').on('click', playAudio);
    // $('#eKey').on('click', playAudio);
    // $('#fKey').on('click', playAudio);
    // $('#gKey').on('click', playAudio);
    // $('#aKey').on('click', playAudio);
    // $('#bKey').on('click', playAudio);
});

//maybe later I should add a free play section so players can just make noise on the piano to understand what they are hearing