console.log("I'm alive!");

let mozartChoice = [];
let playerChoice = [];
let flash;
let turn;
let success;
let mozTurn;
let intervalId;
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

const gameSetUp = (event) => {
    event = $('#startModal').css('display', 'none');
    win = false;
    mozartChoice = [];
    playerChoice = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    levelCounter.innerHTML = 1;
    success = true;
    for (let i = 0; i < 5; i++) {
        mozartChoice.push(Math.floor(Math.random() * 8) + 1);
    }
    mozTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

//SWITCHING BETWEEN MOZART'S TURN AND PLAYER'S TURN
const gameTurn = () => {
    // if (flash == turn) {
    //     clearInterval(intervalId);
    //     mozTurn = false;
    //     $('#playerTurn').css('display', 'block');
    //     clearColor();
    // }

    if (mozTurn) {
        $('#mozartTurn').css('display', 'block');
        clearColor();
        setTimeout(() => {
            if (mozartChoice[flash] == 1) one();
            if (mozartChoice[flash] == 2) two();
            if (mozartChoice[flash] == 3) three();
            if (mozartChoice[flash] == 4) four();
            if (mozartChoice[flash] == 5) five();
            if (mozartChoice[flash] == 6) six();
            if (mozartChoice[flash] == 7) seven();
            flash++
        }, 200);
    }
}

//HANDLING THE AUDIO

const one = () => {
    if (noise) {
        let audio = document.getElementById('#c-clip');
        audio.play();
    }
    noise = true;
    C.style.backgroundColor = 'orange';
}

// const two = () => {
//     if (noise) {
//         let audio = document.getElementById('#d-clip');
//         audio.play();
//     }
//     noise = true;
//     D.style.backgroundColor = 'orange';
// }

// const three = () => {
//     if (noise) {
//         let audio = document.getElementById('#e-clip');
//         audio.play();
//     }
//     noise = true;
//     E.style.backgroundColor = 'orange';
// }

// const four = () => {
//     if (noise) {
//         let audio = document.getElementById('#f-clip');
//         audio.play();
//     }
//     noise = true;
//     F.style.backgroundColor = 'orange';
// }

// const five = () => {
//     if (noise) {
//         let audio = document.getElementById('#g-clip');
//         audio.play();
//     }
//     noise = true;
//     G.style.backgroundColor = 'orange';
// }

// const six = () => {
//     if (noise) {
//         let audio = document.getElementById('#a-clip');
//         audio.play();
//     }
//     noise = true;
//     A.style.backgroundColor = 'orange';
// }

// const seven = () => {
//     if (noise) {
//         let audio = document.getElementById('#b-clip');
//         audio.play();
//     }
//     noise = true;
//     B.style.backgroundColor = 'orange';
// }


const clearColor = () => {
    C.style.backgroundColor = 'ivory';
    D.style.backgroundColor = 'ivory';
    E.style.backgroundColor = 'ivory';
    F.style.backgroundColor = 'ivory';
    G.style.backgroundColor = 'ivory';
    A.style.backgroundColor = 'ivory';
    B.style.backgroundColor = 'ivory';
}

const flashColor = () => {
    C.style.backgroundColor = 'orange';
    D.style.backgroundColor = 'orange';
    E.style.backgroundColor = 'orange';
    F.style.backgroundColor = 'orange';
    G.style.backgroundColor = 'orange';
    A.style.backgroundColor = 'orange';
    B.style.backgroundColor = 'orange';
}

window.addEventListener('keydown', (event)=>{
        playerChoice.push(1);
        check();
        playAudio();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    console.log(playerChoice);
})

D.addEventListener('click', (event)=>{
        playerChoice.push(2);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
})

E.addEventListener('click', (event)=>{
        playerChoice.push(3);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
})

F.addEventListener('click', (event)=>{
        playerChoice.push(4);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
})

G.addEventListener('click', (event)=>{
        playerChoice.push(5);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
})

A.addEventListener('click', (event)=>{
        playerChoice.push(6);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
})

B.addEventListener('click', (event)=>{
        playerChoice.push(7);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
})

// const mozartTurn = () => {
//     // playerTurn();
// }

// const playerTurn = () => {
//     playerChoice.push(keyCode);
//     if (playerChoice === levels) {

//     }
//     turnCounter.innerHTML = 
//     checkForWin();
// }

//This function should actually be checkForWin
//Checks the playerChoice against mozartChoice array every turn
const check = () => {
    if (playerChoice[playerChoice.length - 1] !== mozartChoice[playerChoice.length - 1]) {
        success = false;
    }
}

//This function should actually be the winningScenario
const winGame = () => {
    $('#endModal').css('display', 'block');
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
    window.addEventListener('keydown', playAudio);

$(() => {

    // window.addEventListener('keydown', playAudio);

    //HIDE THE MODAL AND START THE GAME
    $('#play').on('click', gameSetUp);

    //RESET EVENT
    $('#reset').on('click', restartGame);

    //PLAY AGAIN
    $('#playAgain').on('click', playAgain);

});

//maybe later I should add a free play section so players can just make noise on the piano to understand what they are hearing