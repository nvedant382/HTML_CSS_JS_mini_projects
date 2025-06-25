document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.value;

            switch (value) {
                case "AC":
                    display.value = "";
                    break;

                case "DE":
                    display.value = display.value.slice(0, -1);
                    break;

                case "=":
                    try {
                        display.value = math.evaluate(display.value);
                    } catch (err) {
                        display.value = "Error";
                    }
                    break;

                default:
                    display.value += value;
                    break;
            }
        });
    });
});
