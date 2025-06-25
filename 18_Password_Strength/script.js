let strength = document.getElementById("strength");
let password = document.getElementById("password");
let message = document.getElementById("message");

password.addEventListener("input", () => {
    const val = password.value;

    if (val.length > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }

    // Define regular expressions
    const hasLower = /[a-z]/.test(val);
    const hasUpper = /[A-Z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasSpecial = /[@#$%^&*()_+!]/.test(val);

    if (val.length < 4) {
        strength.innerText = "Weak";
        password.style.borderColor = "red";
        message.style.color = "red";
    } else if (
        val.length >= 4 &&
        (!hasLower || !hasUpper || !hasNumber || !hasSpecial || val.length < 8)
    ) {
        strength.innerText = "Medium";
        password.style.borderColor = "orange";
        message.style.color = "orange";
    } else {
        strength.innerText = "Strong";
        password.style.borderColor = "green";
        message.style.color = "green";
    }
});
