let min = 1;
let max = 100;
let currentGuess = Math.floor((min + max) / 2);
let attempts = 0;

function updateGuess() {
    console.log("Appen kører! skide godt :)");
    document.getElementById('guess').innerText = `Computerens gæt: ${currentGuess}`;
    document.getElementById('attempts').innerText = `Antal forsøg: ${attempts}`;
}

function guessTooLow() {
    min = currentGuess + 1;
    attempts++;
    currentGuess = Math.floor((min + max) / 2);
    document.getElementById('feedback').innerText = "For lavt!";
    updateGuess();
}

function guessTooHigh() {
    max = currentGuess - 1;
    attempts++;
    currentGuess = Math.floor((min + max) / 2);
    document.getElementById('feedback').innerText = "For højt!";
    updateGuess();
}

function guessCorrect() {
    attempts++;
    document.getElementById('feedback').innerText = `Yaay!! Mig computeren er den klogeste ${currentGuess} på ${attempts} forsøg.`;
    disableButtons();
}

function disableButtons() {
    document.getElementById('tooLow').disabled = true;
    document.getElementById('tooHigh').disabled = true;
    document.getElementById('correct').disabled = true;
}

function main() {
    updateGuess();

    document.getElementById('tooLow').addEventListener('click', guessTooLow);
    document.getElementById('tooHigh').addEventListener('click', guessTooHigh);
    document.getElementById('correct').addEventListener('click', guessCorrect);
}

window.onload = main;



//* Dette spil er dig som skal gætte et tal mellem 1 og 100. Computeren vil fortælle dig om dit gæt er for højt eller for lavt. Når du har gættet rigtigt vil computeren fortælle dig hvor mange forsøg det tog. */
// let secret;

// function start () {
//     console.log("Kører");
//     secret = randomNumber();
//     document.querySelector("#guesser").addEventListener("submit", receiveInput);
// }  

// function randomNumber () {
//     return Math.floor(Math.random()*100) + 1;  
// }
                  
// function receiveInput(event) {
//     event.preventDefault();
//     const form = event.target;
//     const guess = form.guess.valueAsNumber;
//     const comp = compare(guess, secret);

//     if(comp < 0) {
//       outputAnswer(`Du gættede på ${guess} - det var for lavt`);
//     }  
//     if(comp > 0) {
//       outputAnswer(`Du gættede på ${guess} - det var for højt`);
//     }
  
//     if( comp == 0) {
//       outputAnswer(`Du gættede ${guess} og det er korrekt`);
//       form.removeEventListener("submit", receiveInput);
//       form.remove();
//     }
//   }

//   function compare(guess, secret) {
//     return guess-secret;
//   }
  
//   function outputAnswer(text) {
//     document.querySelector("#guesses").insertAdjacentHTML("beforeend", `<li>${text}</li>`);    console.log(text);
// }