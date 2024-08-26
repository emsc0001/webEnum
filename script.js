window.addEventListener("load", start);

let secret;

function start () {
    console.log("Kører");
    secret = randomNumber();
    document.querySelector("#guesser").addEventListener("submit", recieveInput);
}   

function randomNumber () {
    return Math.floor(Math.random()*100)
}
                  
function recieveInput (event) {
    console.log("Recieve input");
    event.preventDefault();
    const form = event.target;
    const guess = parseInt(form.elements.guess.value, 10);
    const result = compare(guess, secret);

    if (result === -1) {
        console.log("Your guess is too low");
    } else if (result === 1) {
        console.log("Your guess is too high");
    } else {
        console.log("Congratulations! You guessed the secret number");
    }


}

function compare (guess, secret) {
    if (guess < secret) return -1;
    if (guess > secret) return 1;
    if (guess = secret) return 0;
}



function outputAnswer(text) {
    document.querySelector("guesses").insertAdjacentHTML("beforeend", `<li>${text}</li>`)
    console.log(text);
}