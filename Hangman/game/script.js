const letters = [
    "JAVASCRIPT", "PYTHON", "JAVA", "KEYBOARD",
    "KOTLIN", "DEVELOPER", "PROGRAMMING",
    "COMPUTER", "SOFTWARE", "HARDWARE",
    "ALGORITHM", "FUNCTION", "VARIABLE", "OBJECT",
    "DATABASE", "NETWORK", "INTERNET", "COMPILER",
    "DEBUGGER", "FRAMEWORK", "REACT", "ANGULAR",
    "VUE", "PYCHARM", "GITHUB", "JQUERY", "TYPESCRIPT",
    "NODEJS", "BOOTSTRAP", "MONGODB"
];

let currentWord = "";
let displayedWord = [];
const maxLives = 6;
let mistakes = 1;
let guessedLetters = [];
const btn = document.getElementById("guessBtn");
const input = document.getElementById("inp");
btn.disabled = true;
let score = 0;

const generateLetter = () => {

    guessedLetters = [];

    document.getElementById("guessed-label").innerHTML = [];
    document.getElementById("you-won").innerHTML = "";

    input.value = "";
    btn.disabled = false;
    mistakes = 0;

    document.getElementById("wrongCount").innerHTML = 0;
    document.getElementById("game-over").innerHTML = "";

    const word = letters[Math.floor(Math.random() * letters.length)];

    currentWord = word.split("");
    console.log(currentWord);

    displayedWord = currentWord.map(() => "_");

    document.getElementById("guessedRow").innerHTML =
        displayedWord.join(" ");
};

const guessLetter = () => {


    const letter = input.value.toUpperCase();

    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
    }

    //showing guessed letters
    document.getElementById("guessed-label").innerHTML = `<p class="written">Guessed Letters: ${guessedLetters.join(", ")}</p>`;

    let flag = 0;
    for (let i = 0; i < currentWord.length; i++) {
        if (letter === currentWord[i]) {
            displayedWord[i] = letter;
            flag = 1;
        }
    }

    // Wrong guess
    if (flag === 0) {
        mistakes++;
        document.getElementById("wrongCount").innerHTML = mistakes;

        if (mistakes == 6) {
            document.getElementById("game-over").innerHTML = "GAME OVER, YOU LOOSE";
            btn.disabled = true;
            document.getElementById("score").innerHTML = `<h2>Score: 0</h2>`;
        }
    }

    // Right guess
    document.getElementById("guessedRow").innerHTML = displayedWord.join(" ");
    input.value = "";

    if (!displayedWord.includes("_")) {
        document.getElementById("you-won").innerHTML = "CONGRATULATIONS, YOU WON";
        btn.disabled = true;

        document.getElementById("score").innerHTML = `<h2>Score: ${++score}</h2>`;

    }


};










window.onload = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    document.getElementById("username").innerHTML = ` <h2>Welcome: ${token.username}</h2>`;
};

