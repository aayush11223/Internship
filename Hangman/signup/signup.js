let login = document.getElementById("login")


document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let inputUsername = document.getElementById("username").value.trim();
    let inputPassword = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();


    registerUser(inputUsername, inputPassword, confirmPassword);
});

function registerUser(newUsername, newPassword, confirmPassword) {

    // get stored users from localStorage
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Existing users:", storedUsers);

    // check if username already exists
    let isUserTaken = storedUsers.some(
        existingUser => existingUser.username === newUsername
    );

    if (newPassword !== confirmPassword) {
        showMessage("Password did not matched!", "red");
        return;
    }

    if (isUserTaken) {
        showMessage("Username already exists!", "red");
        return;
    }

    // create new user object
    let userObject = {
        username: newUsername,
        password: newPassword,
        confirmPassword: confirmPassword
    };

    // add new user to array
    storedUsers.push(userObject);

    // save updated users back to localStorage
    localStorage.setItem("users", JSON.stringify(storedUsers));

    showMessage("Signup successful!", "green");

    // reset form
    document.getElementById("signupForm").reset();

    // redirect after short delay
    setTimeout(() => {
        window.location.href = "../login/login.html";
    }, 1000);
}
function showMessage(messageText, messageColor) {
    let messageBox = document.getElementById("message");
    messageBox.innerText = messageText;
    messageBox.style.color = messageColor;
}