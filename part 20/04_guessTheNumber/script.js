let randomNumber = parseInt(Math.random()*100+1);  //adding 1 is because of some time 0 will occure so i add the 1
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess <1){
        alert('please enter between 1 to 100');
    }
    else if(guess > 100){
        alert('please enter no between 1 to 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`game over, random number is${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guesses right`)
        endGame();
    }
    else if (guess<randomNumber){
        displayMessage(`number is low`)
    }
    else if (guess>randomNumber){
        displayMessage(`number is high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click',function(e){
        randomNumber =  parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;

    })
}






