let isLoginMode = true;

const toggleLink = document.getElementById("toggleAuth");
const formTitle = document.getElementById("formTitle");
const loginPage = document.getElementById("loginPage");
const loginBtn = document.getElementById("loginBtn");

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (isLoginMode) {
        loginUser(username, password);
    } else {
        signupUser(username, password);
    }
});

function loginUser(inputUsername, inputPassword) {
    let registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    let matchedUser = registeredUsers.find(user =>
        user.username === inputUsername && user.password === inputPassword
    );

    if (!matchedUser) {
        showMessage("Invalid username or password!", "red");
        return;
    }

    let loginToken = {
        username: matchedUser.username,
        loginTime: Date.now()
    };

    localStorage.setItem("token", JSON.stringify(loginToken));

    showMessage("Login successful! Redirecting...", "green");

    setTimeout(() => {
        window.location.href = "../game/index.html";
    }, 1000);
}

function signupUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.find(user => user.username === username);

    if (userExists) {
        showMessage("Username already exists!", "red");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    showMessage("Signup successful! Now login.", "green");

    document.getElementById("loginForm").reset();

    isLoginMode = true;
    formTitle.innerText = "Login";
    toggleLink.innerText = "Signup";
    loginBtn.innerText = "Login";
    loginPage.innerText = "LOGIN PAGE";
}

function showMessage(messageText, messageColor) {
    let messageBox = document.getElementById("message");
    messageBox.innerText = messageText;
    messageBox.style.color = messageColor;
}

toggleLink.addEventListener("click", (e) => {
    e.preventDefault();

    isLoginMode = !isLoginMode;

    if (isLoginMode) {
        formTitle.innerText = "Login";
        toggleLink.innerText = "Signup";
        loginPage.innerText = "LOGIN PAGE";
        loginBtn.innerText = "Login";
    } else {
        formTitle.innerText = "Signup";
        toggleLink.innerText = "Login";
        loginPage.innerText = "SIGNUP PAGE";
        loginBtn.innerText = "Signup";
    }

    document.getElementById("message").innerText = "";
    document.getElementById("loginForm").reset();
});