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
    for (var i = 0; i < array.length; i++) {
        const alphaExp = /^[a-zA-Z]+$/;
        const newLI = document.createElement("LI");
        newLI.textContent = array[i];
        if (newLI.textContent.match(alphaExp)) {
            newLI.className = "letter";
        }

        const phraseDisplay = document.querySelector("#phrase ul");
        phraseDisplay.appendChild(newLI);
        console.log(phraseDisplay);
    }
}

addPhraseToDisplay(phraseAsArray);


// Function for checking the letter input
function checkLetter(button) {
    const letters = document.querySelectorAll('.letter');
    let match = null;
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === button.textContent) {
            letters[i].classList.add("show");
            match = letters[i];
        }
    }
    return match;
}

// Event listener for keyboard button press
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
    }
}); 

// Can't seem to get only the letters to be chosen





