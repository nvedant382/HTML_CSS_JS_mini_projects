document.addEventListener("DOMContentLoaded", function () {
    let icon = document.getElementById("icon")
    let password = document.getElementById("password")

    icon.onclick = function () {
        if (password.type == "password") {
            password.type = "text"
            icon.src = "eye-open.png"
        } else {
            password.type = "password"
            icon.src = "eye-close.png"
        }
    }
})