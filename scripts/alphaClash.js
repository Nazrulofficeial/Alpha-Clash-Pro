// function play() {
//     // step-1: hide the home screen. to hide the screen add hidden class to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList);

//     // step-2: Show the playground
//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log("player pressed -", playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // checked match or not
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        // update score:
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-scores');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);


        // 2. increase the score by 1
        const newScore = currentScore + 1;


        // 3. show the updated score
        currentScoreElement.innerText = newScore;
        
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {
        console.log('You missed, you lost a life');
        // step 1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step 2: reduce the life count
        const newLife = currentLife -1;
        // step 3: display the updated life count
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (Show It)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet)

}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}