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
    return phraseLetters; /*Turn the phrase into an array of letters*/
}

getRandomPhraseAsArray(phrases);

// Function for checking the letter input
function checkLetter(clickedButton) {
    const liAll = querySelectorAll('li');
    console.log(liAll);
}

