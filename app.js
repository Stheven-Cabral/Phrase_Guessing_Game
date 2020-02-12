// variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');
var missed = 0;  /*Max of 5 incorrect guesses allowed*/
const overlay = document.getElementById('overlay');

const phrases = [
    "it takes two to tango",
    "close but no cigar",
    "down to earth",
    "elephant in the room",
    "hard pill to swallow",
    "slow and steady wins the race"
];

// Hide screen overlay
btn__reset.addEventListener('click', () => {
    overlay.style.display = "none";
});

//Function that grabs a phrase from the phrase array.
function getRandomPhraseAsArray(array) {
    const randomNum = Math.floor(Math.random() * array.length);
    const chosenPhrase = array[randomNum];
    const phraseLetters = chosenPhrase.split('');
    return phraseLetters; 
}

const phraseAsArray = getRandomPhraseAsArray(phrases);

// Function for displaying the phrase array
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
    console.log(phraseDisplay);  /*remove when done*/
}

addPhraseToDisplay(phraseAsArray);


// Function for checking the letter input
function checkLetter(button) {
    const letters = document.querySelectorAll('.letter');
    let match = null;
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].textContent === button.textContent) {
            letters[i].classList.add("show");
            match = letters[i];
        }
    }
    console.log(match); /*remove when done*/
    return match;
}

// Event listener for keyboard button press
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

    checkWin();
}); 

// Function for checking if the player has won.
function checkWin() {
    const checkLetters = document.querySelectorAll('.letter');
    const checkShown = document.querySelectorAll('.show');
    const  overlayTitle= document.querySelector('.title');

    btn__reset.textContent = "Reset";

    if (checkLetters.length === checkShown.length) {
        overlay.classList.add('win');
        overlayTitle.textContent = 'WINNER';
        overlay.style.display = "flex";
    } else if (missed >= 5) {
        overlay.classList.add('lose');
        overlayTitle.textContent = 'OUT OF LIVES';
        overlay.style.display = "flex";
    }

    btn__reset.addEventListener ('click', reset);
}

// Function for resetting the fame.
function reset () {
    // Resets the missed counter.
    missed = 0;

    // Remove previous phrase.
    const prevPhraseParent = document.querySelector('#phrase ul');
    const prevPhraseArray = document.querySelectorAll('#phrase li');
    for (var i = 0; i < prevPhraseArray.length; i++) {
        prevPhraseParent.removeChild(prevPhraseArray);
    }

    // Add heart lives back to display.
    const hearts = document.querySelectorAll('.tries');
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].style.display = "inline";
    }

    // // Resets the display.
    // const letterReset = document.querySelectorAll('.letter');
    // for (var i = 0; i < letterReset.length; i++) {
    //     letterReset[i].classList.remove("letter");
    // }

    // const shownReset = document.querySelectorAll('.show');
    // for (var i = 0; i < shownReset.length; i++) {
    //     shownReset[i].classList.remove("show");
    // }

    // Remove chosen class from the letter buttons.
    const chosenButton = document.querySelectorAll('.chosen');
    for (var i = 0; i < chosenButton.length; i++) {
        chosenButton[i].classList.remove("chosen");
    }

    // Add a new phrase to the display
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));
    
}






