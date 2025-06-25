const passwordBox = document.querySelector("#password");
const lengthField = document.querySelector("#length");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {

    const length = parseInt(lengthField.value);

    if (isNaN(length) || length < 4) {
        alert("Password must be at least 4 characters long!");
        return;
    }

    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = password.split("")
        .sort(() => 0.5 - Math.random())
        .join("")

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}