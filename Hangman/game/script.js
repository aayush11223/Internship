let currentWord = [];
let displayedWord = [];
const maxLives = 6;
let mistakes = 0;
let guessedLetters = [];
const btn = document.getElementById("guessBtn");
const input = document.getElementById("inp");
const startGame = document.getElementById
    ("start-game");
const newbtn = document.getElementById("newBtn");
let score = 0;
const wrongSound = new Audio("sounds/fahhhhh.mp3");
const rightSound = new Audio("sounds/tudum.mp3")
const bgMusic = new Audio("sounds/Background.mp3");
const congSound = new Audio("sounds/cong.mp3");
const looseSound = new Audio("sounds/loose.mp3")


bgMusic.loop = true;


input.style.display = "none";
newbtn.style.display = "none";

input.addEventListener("click", () => {
    input.placeholder = ""
});


const updateLivesBar = () => {
    const dots = document.querySelectorAll(".life");
    dots.forEach((dot, i) => {
        dot.classList.toggle("lost", i < mistakes);
    });
};

const showPopup = (won) => {
    const overlay = document.getElementById("popup-overlay");
    document.getElementById("popup-icon").textContent = won ? "🎉" : "💀";
    if (won) {
        congSound.play();
    } else {
        looseSound.play();
    }
    document.getElementById("popup-title").textContent = won ? "You won!" : "Game over";
    document.getElementById("popup-title").className = "popup-title " + (won ? "win" : "lose");
    document.getElementById("popup-word").innerHTML =
        `The word was <span>${currentWord.join("")}</span>`;
    overlay.classList.add("show");
};

const closePopup = () => {
    document.getElementById("popup-overlay").classList.remove("show");
    generateLetter();
};

const fetchWords = async () => {
    try {
        const response = await fetch("https://www.wordgamedb.com/api/v2/words/random");
        const data = await response.json();
        document.getElementById("hint").textContent = "Hint: " + data.hint;
        return data.word.toUpperCase();
    } catch (error) {
        console.error("API error, using fallback word:", error);
        document.getElementById("hint").textContent = "";
        const fallback = ["JAVASCRIPT", "PYTHON", "DEVELOPER", "ALGORITHM", "DATABASE"];
        return fallback[Math.floor(Math.random() * fallback.length)];
    }
};

const generateLetter = async () => {
    guessedLetters = [];
    mistakes = 0;

    bgMusic.play();
    startGame.style.display = "none";
    input.style.display = "flex";
    newbtn.style.display = "flex";

    document.getElementById("guessed-label").textContent = "";
    document.getElementById("wrongCount").textContent = 0;
    document.getElementById("msg").innerHTML = "<p>Guess a letter</p>";
    document.getElementById("popup-overlay").classList.remove("show");
    updateLivesBar();
    input.value = "";

    const word = await fetchWords();
    currentWord = word.split("");
    displayedWord = currentWord.map(() => "_");
    document.getElementById("guessedRow").textContent = displayedWord.join("  ");
    btn.disabled = false;
    input.focus();
};

const guessLetter = () => {
    const letter = input.value.toUpperCase().trim();
    input.value = "";

    if (!letter || guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);
    document.getElementById("guessed-label").textContent =
        "Guessed: " + guessedLetters.join(", ");

    let correct = false;
    for (let i = 0; i < currentWord.length; i++) {
        if (letter === currentWord[i]) {
            rightSound.currentTime = 0;
            rightSound.play();
            displayedWord[i] = letter;
            correct = true;
        }
    }

    if (!correct) {
        mistakes++;

        wrongSound.currentTime = 0;
        wrongSound.play();

        document.getElementById("wrongCount").textContent = mistakes;
        updateLivesBar();
        if (mistakes >= maxLives) {
            btn.disabled = true;
            score = 0;
            document.getElementById("score").innerHTML = `<h2>Score: ${score}</h2>`;
            showPopup(false);
            return;
        }
    }

    document.getElementById("guessedRow").textContent = displayedWord.join("  ");

    if (!displayedWord.includes("_")) {
        btn.disabled = true;
        document.getElementById("score").innerHTML = `<h2>Score: ${++score}</h2>`;
        showPopup(true);
    }
};

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !btn.disabled) guessLetter();
});

window.onload = () => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        document.getElementById("username").innerHTML =
            `<h2>Welcome: ${token.username}</h2>`;
    } catch {
        document.getElementById("username").innerHTML = `<h2>Welcome!</h2>`;
    }
};