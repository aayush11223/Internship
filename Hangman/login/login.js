document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let enteredUsername = document.getElementById("username").value.trim();
    let enteredPassword = document.getElementById("password").value.trim();

    loginUser(enteredUsername, enteredPassword);
});

function loginUser(inputUsername, inputPassword) {

    // get stored users from localStorage
    let registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    // find matching user
    let matchedUser = registeredUsers.find(user =>
        user.username === inputUsername && user.password === inputPassword
    );

    // if user not found
    if (!matchedUser) {
        showMessage("Invalid username or password!", "red");
        return;
    }

    // create login session token
    let loginToken = {
        username: matchedUser.username,
        loginTime: Date.now()
    };

    // save token
    localStorage.setItem("token", JSON.stringify(loginToken));

    showMessage("Login successful! Redirecting...", "green");

    // redirect after delay
    setTimeout(() => {
        window.location.href = "../game/index.html";
    }, 1000);
}

function showMessage(messageText, messageColor) {
    let messageBox = document.getElementById("message");
    messageBox.innerText = messageText;
    messageBox.style.color = messageColor;
}