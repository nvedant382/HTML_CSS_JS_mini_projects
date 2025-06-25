const scriptURL = 'https://script.google.com/macros/s/AKfycbwDKJRy7vR7DplJx4guuj3i3_wzaTf2_GtqrlpotVzeDd_HLVf0lwNOucv9j1WOnNoh/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Thank You for Subscribing!'
            setTimeout(() => {
                msg.innerHTML = ''
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
