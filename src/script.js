function toggleForm() {
    var registrationForm = document.getElementById("registration-form");
    var loginForm = document.getElementById("login-form");

    if (registrationForm.style.display === "none") {
        registrationForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        registrationForm.style.display = "none";
        loginForm.style.display = "block";
    }
}
function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (emailIsValid(email) && passwordIsValid(password)) {
        window.location.assign('feed.html')
        alert("Login successful!")
        return true;
    } else {
        alert("Invalid email or password");
        return false;
    }
}

var registeredUsers = [];
function validateRegistration() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email_id").value;
    var password = document.getElementById("pass").value;

    if (emailIsValid(email) && passwordIsValid(password)) {
        var user = {
            name: name,
            email: email,
            password: password
        };
        registeredUsers.push(user);
        window.location.assign('feed.html')
        alert("Registration successful!")
        return true;
    } else {
        alert("Invalid email or password");
    }
}



function emailIsValid(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function passwordIsValid(password) {
    // if (password.length > 12 || password.length < 8) {
    //     return "Password should be between 8 and 12 characters";
    // }
    //
    // if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
    //     return "Password should include at least 1 lowercase letter, 1 uppercase letter, and 1 special character";
    // }
    return password.length >= 6;
}



