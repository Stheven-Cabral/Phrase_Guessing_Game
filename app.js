// variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');
var missed = 0;  /*Max of 5 incorrect guesses allowed*/
const overlay = document.getElementById('overlay');
console.log(overlay);

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

//Function that grabs a phrase from the phrase array
function getRandomPhrase(array) {
    const randomNum = Math.floor((Math.random() * array.length) + 1);
    const chosenPhrase = array[randomNum];
    return chosenPhrase;
}

console.log(getRandomPhrase(phrases)); /*why are you getting an undefined?*/