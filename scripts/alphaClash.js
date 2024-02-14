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

function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (Show It)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet

}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}