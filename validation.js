
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg
}

function validateSignUpInputCredentials() {
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirmpassword = document.getElementById("confirm-password").value;
    var nameErr = passwordErr = confirmPasswordErr = true;
    if (username == " ") {
        printError("usernameErr", "please enter your valid name");
    }
    else {
        var regex = /^[A-Za-z ]+$/;
        if (regex.test(username) == false) {
            printError("usernameErr", "please enter a valid name");
        }
        else {
            printError("usernameErr", "");
            nameErr = false;
        }
    }
    if (email == "") {
        printError("emailErr", "please enter your email address");
    }
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) == false) {
            printError("emailErr", "please enter a valid email address");
        }
        else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if (password == "") {
        printError("passwordErr", "please enter your password");
    }
    else {
        printError("passwordErr", "");
        passwordErr = false;
    }
    if (confirmpassword == "") {
        printError("confirmPasswordErr", "please enter your confirm password");
    }
    else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }
    if ((nameErr || emailErr || passwordErr || confirmPasswordErr) == true) {
        return false;
    }
    else {
        return true;
    }
}
function validateLoginInputCredentials() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    var emailErr = passwordErr = true;
    if (email == "") {
        printError("emailErr", "please enter your email address");
    }
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) == false) {
            printError("emailErr", "please enter a valid email address");
        }
        else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if (password == "") {
        printError("passwordErr", "please enter your password");
    }
    else {
        printError("passwordErr", "");
        passwordErr = false;
    }
    if ((emailErr || passwordErr) == true) {
        return false;
    }
    else {
        return true;
    }
}