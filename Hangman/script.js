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
let mistakes = 0;
let guessedLetters = [];
const btn = document.getElementById("guessBtn");
const input = document.getElementById("inp");
btn.disabled = true;


const generateLetter = () => {

    document.getElementById("guessed-label").innerHTML = "";

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
        }
    }

    document.getElementById("guessedRow").innerHTML = displayedWord.join(" ");
    input.value = "";
};

