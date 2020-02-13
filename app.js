// variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
var missed = 0;

const phrases = [
    "it takes two to tango",
    "close but no cigar",
    "down to earth",
    "elephant in the room",
    "hard pill to swallow",
    "slow and steady wins the race"
];

// Hides screen overlay when Start button is clicked.
btn__reset.addEventListener('click', () => {
    overlay.style.display = "none";
});

//Function that grabs a phrase from the phrase array and converts it to an array of characters.
function getRandomPhraseAsArray(array) {
    const randomNum = Math.floor(Math.random() * array.length);
    const chosenPhrase = array[randomNum];
    const phraseLetters = chosenPhrase.split('');
    return phraseLetters; 
}

// Function for displaying the phrase array.
function addPhraseToDisplay (array) {
    const phraseDisplay = document.querySelector("#phrase ul");
    for (var i = 0; i < array.length; i++) {
        const alphaExp = /^[a-zA-Z]+$/;
        const newLI = document.createElement("LI");
        newLI.textContent = array[i];
        if (newLI.textContent.match(alphaExp)) {
            newLI.className = "letter";
        } else {
            newLI.className = "space";
        }
        phraseDisplay.appendChild(newLI);
    }
}


// Calling the functions that chooses a phrase and displays it.
const phraseAsArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseAsArray);


// Function for checking the letter button inputs.
function checkLetter(button) {
    const letters = document.querySelectorAll('.letter');
    let match = null;
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].textContent === button.textContent) {
            letters[i].classList.add("show");
            match = letters[i];
        }
    }
    return match;
}

// Event listener for letter button click.
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
    }

    const guess = checkLetter(e.target);

    if (guess === null) {
        var miss = document.querySelectorAll('.tries');
        miss[missed].style.display = "none";
        missed += 1 ;
    }
    // checkWin function called to determine if a player has won or is out of lives.
    checkWin();
}); 

// Function that checks if the player has won.
function checkWin() {
    const checkLetters = document.querySelectorAll('.letter');
    const checkShown = document.querySelectorAll('.show');
    const  overlayTitle= document.querySelector('.title');
    function addReset() {
        btn__reset.textContent = "Reset";
        btn__reset.addEventListener ('click', reset);
    }

    if (checkLetters.length === checkShown.length) {
        overlay.classList.add('win');
        overlayTitle.textContent = 'WINNER';
        overlay.style.display = "flex";
        addReset();
    } else if (missed >= 5) {
        overlay.classList.add('lose');
        overlayTitle.textContent = 'OUT OF LIVES';
        overlay.style.display = "flex";
        addReset();
    }
}

// Function for resetting the game.
function reset () {
    // Resets the missed counter.
    missed = 0;

    // Remove previous phrase.
    const prevPhraseParent = document.querySelector('#phrase ul');
    const prevPhraseArray = document.querySelectorAll('#phrase li');
    for (var i = 0; i < prevPhraseArray.length; i++) {
        prevPhraseParent.removeChild(prevPhraseArray[i]);
    }

    // Add heart lives back to the display.
    const hearts = document.querySelectorAll('.tries');
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].style.display = "inline";
    }

    // Remove chosen class from the letter buttons.
    const chosenButton = document.querySelectorAll('.chosen');
    for (var i = 0; i < chosenButton.length; i++) {
        chosenButton[i].classList.remove("chosen");
    }

    // Add a new phrase to the display
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));
    
}






