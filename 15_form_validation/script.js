let nameError = document.getElementById("name-error")
let emailError = document.getElementById("email-error")
let phoneError = document.getElementById("phone-error")
let messageError = document.getElementById("message-error")
let submitError = document.getElementById("submit-error")

function validateName() {
    let name = document.getElementById("name").value.trim()

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required'
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name'
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validatePhone() {
    let phone = document.getElementById("phone").value

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone is required'
        return false;
    }
    else if (phone.length !== 10) {
        phoneError.innerHTML = 'Invalid Phone'
        return false;
    } else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone is no required'
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'

    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value.trim()

    if (email.length === 0) {
        emailError.innerHTML = 'email is required'
        return false;
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Email is invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateMessage() {
    let msg = document.getElementById("msg").value.trim()
    let required = 30
    let left = required - msg.length

    if (left > 0) {
        messageError.innerHTML = `${left} more characters required`
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }

    return true;
}